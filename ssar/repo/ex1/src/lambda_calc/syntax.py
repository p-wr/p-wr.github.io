
from functools import reduce
from adt.tree import Tree
from parsing.earley.earley import Grammar, Parser, ParseTrees
from parsing.silly import SillyLexer



class LambdaParser(object):

    TOKENS = r"(let|in)(?![\w\d_])   (?P<id>[^\W\d]\w*)   (?P<num>\d+)   [\\.()=:] ->".split()
    GRAMMAR = r"""
    E    ->  \. | let_    |   E1  |  E1'
    E1   ->  @            |   E0
    E1'  ->  @'           |   E0
    E0   ->  id | num     |  ( E )
    \.   ->  \ A . E 
    @    ->  E1 E0
    @'   ->  E1 \.
    A    ->  L:T  |  A1
    A1   ->  ( L:T ) A0  |  id A0
    A0   ->  A1 |
    L    ->  id L |
    T    ->  T>           |  T1
    T>   ->  T1 -> T
    T1   ->  id           |  ( T )
    L:T  ->  L : T
    let_ ->  let id = E in E | let id:T = E in E
    id:T ->  id : T
    """

    def __init__(self):
        self.tokenizer = SillyLexer(self.TOKENS)
        self.grammar = Grammar.from_string(self.GRAMMAR)

    def __call__(self, program_text):
        tokens = list(self.tokenizer(program_text))

        earley = Parser(grammar=self.grammar, sentence=tokens, debug=False)
        earley.parse()
        
        if earley.is_valid_sentence():
            trees = ParseTrees(earley)
            assert(len(trees) == 1)
            return self.postprocess(trees.nodes[0])
        else:
            return None
            
    def postprocess(self, t):
        if t.root in ['γ', 'E', 'E0', 'E1', "E1'", 'A', 'T', 'T1'] and len(t.subtrees) == 1:
            return self.postprocess(t.subtrees[0])
        elif t.root in ['E0', 'T1'] and t.subtrees[0].root == '(':
            return self.postprocess(t.subtrees[1])
        elif t.root == r'\.':
            args = self.postprocess(t.subtrees[1]).split()
            t = reduce(lambda t, a: Tree('\\', [a, t]), reversed(args), t.subtrees[3])
        elif t.root == "@'":
            t = Tree('@', t.subtrees)
        elif t.root in ['L', 'A0']:
            t = Tree('.', t.split())
        elif t.root == 'A1':
            r = [self.postprocess(s) for s in t.subtrees]
            if r[0].root == 'id': return Tree('.', r)
            elif r[0].root == '(':   #  ( L:T ) A1
                return Tree('.', r[1].subtrees + r[3:])
        elif t.root == 'L:T':
            r = [self.postprocess(s) for s in t.subtrees]
            l, ty = r[0], r[2]
            return Tree('.', [Tree(r[1].root, [a, ty]) for a in l.split()])
        elif t.root in ['id:T', 'T>']:
            t = Tree(t.subtrees[1].root, [t.subtrees[0], t.subtrees[2]])

        return Tree(t.root, [self.postprocess(s) for s in t.subtrees])


"""
Formats an expression for pretty printing.
Should be called as pretty(e), admitting the default values for `parent` and `follow`;
these values are suitable for the top-level term.
They are used subsequently by recursive calls.
"""
def pretty(expr, parent=('.', 0), follow=''):
    if expr.root in ['id', 'num']: return expr.subtrees[0].root
    if expr.root == '\\': 
        tmpl = r"\%s. %s"
        if parent == ('@', 0) or parent[0] == follow == '@': tmpl = "(%s)" % tmpl
    elif expr.root == '@':
        tmpl = "%s %s"
        if parent == ('@', 1): tmpl = "(%s)" % tmpl
    elif expr.root == ':':
        tmpl = "%s : %s"   # for single-argument form
    elif expr.root == '->':
        tmpl = "%s → %s"
        if parent == ('->', 0): tmpl = "(%s)" % tmpl
    elif expr.root == 'let_':
        return "let %s = %s in %s" % tuple(pretty(expr.subtrees[i]) for i in (1, 3, 5))
    else:
        return str(expr)
    
    n = len(expr.subtrees)
    return tmpl % tuple(pretty(s, (expr.root, i), expr.root if i < n-1 else follow)
                        for i, s in enumerate(expr.subtrees))



if __name__ == '__main__':
    
    expr = LambdaParser()(r"let plus:int = \x.x in \(kj : bool) (x : (int -> int) -> bool) z u. x \z g : F. y 6")
    
    if expr:
        print(">> Valid expression.")
        print(expr)
        print(pretty(expr))
    else:
        print(">> Invalid expression.")
