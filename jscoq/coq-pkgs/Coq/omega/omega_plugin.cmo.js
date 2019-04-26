function(l$){"use strict";var
eH="not",eI="*",eU=" 0\n",eY="Z.lt",e3="Z.le",bA="Equation E",bz=" and E",cg=": ",aC=".\n",eG="Z.succ",eO="(",eS="Z.pred",eT="not a number",eR="ZArith",eF="+ ",eL="- ",eB="------------------------\n\n",f=246,eE="Z.sub",eA="tag_hypothesis",an="omega",eK="Inequation E",ch="Z",eQ=")",ci="plugins/omega/coq_omega.ml",eX="N",e2="State",F=122,eN="with",N=143,eW="X%d",eJ=" subsumes E",ck=" E",R="Omega",eV=" states ",ao=248,eD="positive",cf=-18,eC="Equations E",cj="nat",e1="Omega: Can't solve a goal with non-linear products",by=-16,eP="Z.ge",e0=107,eM="Z.gt",aB="Coq",eZ="E%d subsumes E%d.\n",x=l$.jsoo_runtime,V=x.caml_check_bound,ey=x.caml_equal,am=x.caml_fresh_oo_id,b=x.caml_new_string,bt=x.caml_notequal,bw=x.caml_register_global,bx=x.caml_string_notequal,bv=x.caml_trampoline,bu=x.caml_trampoline_return,r=x.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):x.caml_call_gen(a,[b])}function
c(a,b,c){return a.length==2?a(b,c):x.caml_call_gen(a,[b,c])}function
l(a,b,c,d){return a.length==3?a(b,c,d):x.caml_call_gen(a,[b,c,d])}function
bs(a,b,c,d,e){return a.length==4?a(b,c,d,e):x.caml_call_gen(a,[b,c,d,e])}function
ez(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):x.caml_call_gen(a,[b,c,d,e,f])}function
l9(a,b,c,d,e,f,g,h,i,j){return a.length==9?a(b,c,d,e,f,g,h,i,j):x.caml_call_gen(a,[b,c,d,e,f,g,h,i,j])}function
l_(a,b,c,d,e,f,g,h,i,j,k){return a.length==10?a(b,c,d,e,f,g,h,i,j,k):x.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k])}var
q=x.caml_get_global_data(),l8=[11,b(" + "),[2,0,[12,32,[2,0,[11,b(ck),[4,0,0,0,[11,b(aC),0]]]]]]],ep=[0,[0,2],[0,1,0]],cC=[0,b(aB),[0,b("Logic"),[0,b("Decidable"),0]]],bp=b("omega_plugin"),n=q.Stdlib__list,u=q.Stdlib__printf,k=q.Stdlib,m=q.Util,C=q.Not_found,W=q.Int,t=q.Stdlib__hashtbl,aU=q.Assert_failure,w=q.Names,e=q.EConstr,y=q.Bigint,T=q.Pp,P=q.CErrors,ad=q.Logic,as=q.Coqlib,g=q.Tactics,h=q.Tacticals,o=q.Proofview,bn=q.Context,aq=q.Nameops,B=q.Tacmach,b7=q.Reductionops,ek=q.Refine,b5=q.Nametab,b6=q.Libnames,bH=q.Tacred,aG=q.Goptions,bq=q.Ltac_plugin,ae=[0,0],fn=[0,[11,b(eK),[4,0,0,0,[11,b(" is divided by "),[2,0,[11,b(" and the constant coefficient is rounded by subtracting "),[2,0,[11,b(aC),0]]]]]]],b("Inequation E%d is divided by %s and the constant coefficient is rounded by subtracting %s.\n")],fo=[0,[11,b("Constant in equation E"),[4,0,0,0,[11,b(" is not divisible by the pgcd "),[2,0,[11,b(" of its other coefficients.\n"),0]]]]],b("Constant in equation E%d is not divisible by the pgcd %s of its other coefficients.\n")],fp=[0,[12,69,[4,0,0,0,[11,b(" is trivially satisfiable.\n"),0]]],b("E%d is trivially satisfiable.\n")],fq=[0,[11,b(bA),[4,0,0,0,[11,b(" is divided by the pgcd "),[2,0,[11,b(" of its coefficients.\n"),0]]]]],b("Equation E%d is divided by the pgcd %s of its coefficients.\n")],fr=[0,[11,b("We state "),[2,0,[11,b(ck),[4,0,0,0,[11,b(" = "),[2,0,[12,32,[2,0,[11,b(ck),[4,0,0,0,l8]]]]]]]]]],b("We state %s E%d = %s %s E%d + %s %s E%d.\n")],fs=[0,[11,b("We define a new equation E"),[4,0,0,0,[11,b(cg),0]]],b("We define a new equation E%d: ")],ft=b(" 0"),fu=[0,[11,b("We define E"),[4,0,0,0,[11,b(cg),0]]],b("We define E%d: ")],fv=b(eU),fw=[0,[12,69,[4,0,0,0,[11,b(eJ),[4,0,0,0,[11,b(aC),0]]]]],b(eZ)],fx=[0,[12,69,[4,0,0,0,[11,b(eJ),[4,0,0,0,[11,b(aC),0]]]]],b(eZ)],fy=[0,[11,b(eC),[4,0,0,0,[11,b(bz),[4,0,0,0,[11,b(" imply a contradiction on their constant factors.\n"),0]]]]],b("Equations E%d and E%d imply a contradiction on their constant factors.\n")],fz=[0,[11,b(eC),[4,0,0,0,[11,b(bz),[4,0,0,0,[11,b(" state that their body is at the same time equal and different\n"),0]]]]],b("Equations E%d and E%d state that their body is at the same time equal and different\n")],fA=[0,[12,69,[4,0,0,0,[11,b(bz),[4,0,0,0,[11,b(" can be merged into E"),[4,0,0,0,[11,b(aC),0]]]]]]],b("E%d and E%d can be merged into E%d.\n")],fB=[0,[11,b(bA),[4,0,0,0,[11,b(eV),[2,0,[11,b(" = 0.\n"),0]]]]],b("Equation E%d states %s = 0.\n")],fC=[0,[11,b(eK),[4,0,0,0,[11,b(" states 0 != 0.\n"),0]]],b("Inequation E%d states 0 != 0.\n")],fD=[0,[11,b(bA),[4,0,0,0,[11,b(eV),[2,0,[11,b(" >= 0.\n"),0]]]]],b("Equation E%d states %s >= 0.\n")],fE=[0,[11,b(bA),[4,0,0,0,[11,b(" is split in E"),[4,0,0,0,[11,b(bz),[4,0,0,0,[11,b("\n\n"),0]]]]]]],b("Equation E%d is split in E%d and E%d\n\n")],fF=[0,[11,b("To ensure a solution in the dark shadow the equation E"),[4,0,0,0,[11,b(" is weakened by "),[2,0,[11,b(aC),0]]]]],b("To ensure a solution in the dark shadow the equation E%d is weakened by %s.\n")],fP=b("depend"),fS=b("solve"),fQ=[0,b("plugins/omega/omega.ml"),602,15],fO=b("disequation in simplify"),fN=b("Product dardk"),fM=[0,0,0,0],fK=b("TL"),fJ=b("eliminate_with_in"),fG=[0,[12,88,[4,0,0,0,0]],b(eW)],fl=b(">= 0\n"),fm=b(eB),fi=[0,[12,69,[4,0,0,0,[11,b(cg),0]]],b("E%d: ")],fj=[0,[2,0,[11,b(eU),0]],b("%s 0\n")],fk=b(eB),ff=b("equation"),fg=b("inequation"),fh=b("disequation"),fc=b("="),fd=b(">="),fe=b("!="),e7=b(eL),e_=b(eF),e$=b(""),e8=[0,[2,0,[12,32,0]],b("%s ")],e9=[0,[2,0,[12,32,[2,0,[12,32,0]]]],b("%s %s ")],fa=[0,[11,b(eF),[2,0,[12,32,0]]],b("+ %s ")],fb=[0,[11,b(eL),[2,0,[12,32,0]]],b("- %s ")],e4=b("pgcd_l"),e5=b("Omega.MakeOmegaSolver(I).UNSOLVABLE"),e6=b("Omega.MakeOmegaSolver(I).NO_CONTRADICTION"),fH=b("Omega.MakeOmegaSolver(I).FACTOR1"),fI=b("Omega.MakeOmegaSolver(I).CHOPVAR"),fL=b("Omega.MakeOmegaSolver(I).SOLVED_SYSTEM"),fR=b("Omega.MakeOmegaSolver(I).FULL_SOLUTION"),jb=b(eO),jc=b("+"),jd=b(eQ),je=b("~"),jf=b(eO),jg=b(eI),jh=b(eQ),ji=b("?"),jj=b("weight"),jv=[0,2],jw=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jx=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],jr=[0,2],js=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jt=[0,2],ju=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],jy=[0,2],jz=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],jA=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],j1=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],[0,[0,[0,1],[0,[0,1],[0,[0,2],[0,[0,1],0]]]],0]]]],j2=[0,1],j3=[0,2],j4=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],j5=[0,2],j6=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],j7=b(e1),j8=[0,2],j9=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],ke=[0,1],kf=[0,2],kg=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],kh=[0,[0,[0,1],[0,[0,1],0]],0],ki=b(e1),kj=[0,2],kk=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],0]],kl=[0,[0,[0,1],0],0],km=[0,1],kn=[0,2],ko=[0,1],kp=[0,2],kq=[0,[0,[0,1],0],[0,[0,[0,2],0],0]],kr=[0,1],kI=[0,0,0],kF=[0,1],kG=[0,2],kB=[0,1],kC=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],kD=[0,1],kE=[0,2],kH=[0,1],kK=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],kJ=[0,2],lE=[0,b(aB),[0,b(an),[0,b(R),0]]],lB=b("_eqn"),lx=b("_left"),ly=b("_right"),lj=[0,1],lc=[0,2],ld=[0,1],le=[0,2],lf=[0,1],lg=[0,2],lh=[0,1],li=[0,1],lk=[0,[0,3],[0,1,0]],ll=[0,[0,2],[0,1,0]],lm=[0,[0,2],[0,1,0]],ln=[0,[0,1],[0,1,0]],lo=[0,[0,2],[0,1,0]],lp=[0,[0,1],[0,1,0]],lq=[0,[0,2],[0,1,0]],lr=[0,[0,1],[0,1,0]],ls=[0,[0,2],[0,1,0]],lt=[0,[0,1],[0,1,0]],lu=[0,[0,2],[0,1,0]],lv=[0,[0,1],[0,1,0]],k$=[0,0,0],la=b("Omega can't solve this system"),k9=b(e2),k8=[0,1,0],kO=[0,[0,3],0],kP=[0,[0,2],0],kQ=[0,[0,3],0],kR=[0,[0,3],0],kS=[0,[0,1],[0,1,0]],kT=[0,[0,2],[0,1,0]],kU=[0,[0,2],[0,1,0]],kV=[0,[0,[0,1],0],0],kW=[0,2],kX=[0,1],kY=[0,1],kZ=[0,[0,2],[0,1,0]],k1=[0,[0,1],[0,1,0]],k2=[0,[0,3],0],k3=[0,[0,[0,1],0],0],k4=[0,[0,3],0],k6=[0,[0,2],[0,1,0]],k7=[0,[0,2],[0,1,0]],kL=b("auxiliary"),kM=b("auxiliary_1"),kN=b("auxiliary_2"),ky=b("condense.1"),kz=[0,2],kA=[0,0,0],kx=b("reduce_factor.1"),kt=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]],ku=[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]],kv=[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,2],0]],0]],kw=[0,[0,[0,1],0],0],ks=b("shrink.1"),kc=[0,2],kd=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],ka=[0,2],kb=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],j_=[0,2],j$=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]]],jO=[0,[0,[0,1],[0,[0,1],[0,[0,1],0]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]],jP=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jQ=[0,1],jR=[0,2],jS=[0,2],jT=[0,2],jU=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jV=[0,2],jW=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jX=[0,2],jY=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],0],0]]],jZ=[0,2],j0=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jB=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,1],[0,[0,2],0]],[0,[0,[0,2],[0,[0,2],0]],0]]]]]]],jC=[0,[0,[0,1],[0,[0,1],0]],[0,[0,[0,2],0],0]],jD=[0,1],jE=[0,2],jF=[0,2],jG=[0,2],jH=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jI=[0,2],jJ=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jK=[0,2],jL=[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],0],[0,[0,[0,1],[0,[0,2],0]],0]]]]],jM=[0,2],jN=[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,1],0]]]],[0,[0,[0,2],[0,[0,1],[0,[0,1],[0,[0,2],0]]]],[0,[0,[0,1],0],[0,[0,[0,2],[0,[0,1],[0,[0,2],0]]],[0,[0,[0,2],[0,[0,2],0]],0]]]]],jq=[0,b(ci),747,17],jp=[0,b(ci),748,13],jo=[0,b(ci),707,9],jm=b("H"),jn=b("P"),jk=b("compile_equation."),ja=b("x"),i$=b("occurrence "),i_=b("abstract_path "),i8=b(eT),i9=b(eT),i7=b("Omega: Not a quantifier-free goal"),i3=b(eH),i1=b(eY),iZ=b(eP),iY=b(eM),iX=b(e3),iW=b(eE),iV=b(eS),iU=b(eG),iS=b(" is not an evaluable constant."),iT=[0,b("Coq_omega")],iP=b("True"),iO=b("False"),iN=b("ex"),iM=b("eq"),iL=b("or"),iK=b("and"),iJ=b(eH),iI=b("iff"),iH=b("imp_simp"),iG=b("not_not"),iF=b("not_iff"),iE=b("not_imp"),iD=b("not_and"),iC=b("not_or"),iB=b("dec_True"),iA=b("dec_not_not"),iz=b("dec_False"),iy=b("dec_not"),ix=b("dec_iff"),iw=b("dec_imp"),iv=b("dec_and"),iu=b("dec_or"),it=b("eq_ind_r"),is=b("not_gt"),ir=b("not_ge"),iq=b("not_lt"),ip=b("not_le"),io=b("not_eq"),im=b("dec_gt"),il=b("dec_ge"),ik=b("dec_lt"),ij=b("dec_le"),ii=b("dec_eq_nat"),ih=b("le_gt_dec"),ig=b("pred_of_minus"),ie=b("O"),id=b("S"),ic=b(cj),ib=b("Nat.pred"),ia=b("Nat.mul"),h$=b("Nat.add"),h_=b("Nat.sub"),h9=b("gt"),h8=b("ge"),h7=b("lt"),h6=b("le"),h5=b(eY),h4=b(eP),h3=b(eM),h2=b(e3),h1=b("Zne"),h0=b("neq"),hZ=b("Znot_gt_le"),hY=b("Znot_ge_lt"),hX=b("Znot_lt_ge"),hW=b("Znot_le_gt"),hV=b("not_Zne"),hU=b("not_Zeq"),hT=b("dec_Zge"),hS=b("dec_Zgt"),hR=b("Z.lt_decidable"),hQ=b("Z.le_decidable"),hP=b("dec_Zne"),hO=b("Z.eq_decidable"),hN=b("intro_Z"),hM=b("new_var"),hL=b("Zle_left"),hK=b("Zgt_left"),hJ=b("Zge_left"),hI=b("Zlt_left"),hH=b("Zne_left"),hG=b("Zegal_left"),hF=b("fast_Zopp_involutive"),hE=b("fast_Zopp_eq_mult_neg_1"),hD=b("fast_Zopp_mult_distr_r"),hC=b("fast_Zopp_plus_distr"),hB=b("fast_Zmult_opp_comm"),hA=b("fast_Zmult_plus_distr_l"),hz=b("fast_Zred_factor6"),hy=b("fast_Zred_factor5"),hx=b("fast_Zred_factor4"),hw=b("fast_Zred_factor3"),hv=b("fast_Zred_factor2"),hu=b("fast_Zred_factor1"),ht=b("fast_Zred_factor0"),hs=b("OMEGA20"),hr=b("OMEGA19"),hq=b("OMEGA18"),hp=b("OMEGA17"),ho=b("fast_OMEGA16"),hn=b("fast_OMEGA15"),hm=b("fast_OMEGA14"),hl=b("fast_OMEGA13"),hk=b("fast_OMEGA12"),hj=b("fast_OMEGA11"),hi=b("fast_OMEGA10"),hh=b("OMEGA9"),hg=b("OMEGA8"),hf=b("OMEGA7"),he=b("OMEGA6"),hd=b("OMEGA5"),hc=b("OMEGA4"),hb=b("OMEGA3"),ha=b("OMEGA2"),g$=b("OMEGA1"),g_=b("Zmult_le_approx"),g9=b("fast_Zmult_comm"),g8=b("fast_Zplus_comm"),g7=b("fast_Zplus_permute"),g6=b("fast_Zmult_assoc_reverse"),g5=b("fast_Zplus_assoc"),g4=b("fast_Zplus_assoc_reverse"),g3=b("inj_eq"),g2=b("inj_neq"),g1=b("Znat.inj_gt"),g0=b("Znat.inj_ge"),gZ=b("Znat.inj_lt"),gY=b("Znat.inj_le"),gX=b("Nat2Z.inj_succ"),gW=b("inj_minus2"),gV=b("Nat2Z.inj_sub"),gU=b("Nat2Z.inj_mul"),gT=b("Nat2Z.inj_add"),gS=b("Z.of_nat"),gR=b(eS),gQ=b(eG),gP=b(eE),gO=b("Z.opp"),gN=b("Z.mul"),gM=b("Z.add"),gL=b("Gt"),gK=b("comparison"),gJ=b(ch),gI=b("Zneg"),gH=b("Zpos"),gG=b("Z0"),gF=b("xI"),gE=b("xO"),gD=b("xH"),gq=b("find_contr"),gp=b(eA),gn=b(eA),gl=[0,1],gk=[0,[12,88,[4,0,0,0,0]],b(eW)],gj=b("WW"),gi=b("Zvar"),gh=b(e2),gf=b(R),fY=[0,b(R),[0,b("System"),0]],fZ=b("Omega system time displaying flag"),f2=[0,b(R),[0,b("Action"),0]],f3=b("Omega action display flag"),f6=[0,b(R),[0,b("OldStyle"),0]],f7=b("Omega old style flag"),f_=[0,b("Stable"),[0,b(R),0]],f$=b("Omega automatic reset of generated names"),gc=[0,b(R),[0,b("UseLocalDefs"),0]],gd=b("Omega takes advantage of context variables with body"),gr=[0,[0,b(aB),[0,b(an),[0,b("OmegaLemmas"),0]]],0],gx=b(R),gy=b(R),gz=[0,[0,b(aB),[0,b(eR),0]],0],gA=b(R),gB=[0,[0,b(aB),[0,b(eR),[0,b("BinInt"),0]]],0],gC=b(R),lw=b("Coq_omega.Undecidable"),lX=[0,b(cj),[0,b(eD),[0,b(eX),[0,b(ch),0]]]],lJ=b(eX),lK=b(ch),lL=b(cj),lM=b(eD),lO=b("zify_positive"),lP=b("zify_nat"),lQ=b("zify_op"),lR=b("zify_N"),lN=b("No Omega knowledge base for type "),lH=[0,b("PreOmega"),[0,b(an),[0,b(aB),0]]],lT=[0,b(an),0],lV=b(an),lY=[0,b(an),[0,b(eN),[0,b(eI),0]]],l1=b("l"),l4=b(eN),l5=b(an),l7=b("omega'"),lA=q.Termops,k0=q.Contradiction,k5=q.Equality,jl=q.Evarutil,iQ=q.Global,iR=q.Evd,gv=q.UnivGen,fU=q.CamlinternalLazy,lI=q.Stdlib__string,lG=q.Mltop,l2=q.Stdarg,l3=q.Genarg,bB=[0,ae,function(f){var
j=f[1],v=f[2];function
at(b,a){var
d=c(f[2],b,a),e=d||ey(b,a);return e}function
A(b,a){return c(f[2],a,b)}function
M(b,a){var
d=c(f[2],a,b),e=d||ey(b,a);return e}var
h=f[3],o=f[4],i=f[5];function
x(b,a){return c(f[6],b,a)[1]}function
N(b,a){return c(f[6],b,a)[2]}var
d=f[8],e=f[9],y=c(h,e,e),af=a(f[7],e);function
p(b){return c(f[2],b,d)?a(f[7],b):b}var
g=f[10],w=f[7];function
au(b,a){return b<a?1:0}function
av(b,a){return a<b?1:0}function
aw(b,a){return b<=a?1:0}function
ax(b,a){return a<=b?1:0}function
ay(b){a(k[33],b);a(k[36],0);return a(k[52],k[28])}function
F(b,a){a[1]=[0,b,a[1]];return 0}function
ag(f,e){var
b=f,a=e;for(;;){if(c(j,a,d))return b;var
g=N(b,a),b=a,a=g;continue}}function
ah(b){return b?l(n[20],ag,b[1],b[2]):a(k[3],e4)}function
G(b,a){var
g=M(b,d),f=A(a,d);return 0===g?0===f?x(b,a):c(o,x(c(h,b,e),a),e):0===f?c(o,x(c(o,b,e),a),e):x(b,a)}var
q=[ao,e5,am(0)],ai=[ao,e6,am(0)];function
H(h,f){var
b=f[2],m=f[1],o=0;function
q(i,b){var
m=c(v,b[1],d)?e7:i?e_:e$;a(k[31],m);var
f=p(b[1]);if(c(j,f,e)){var
n=a(h,b[2]);c(u[2],e8,n)}else{var
o=a(h,b[2]),q=a(g,f);l(u[2],e9,q,o)}return 1}l(n[20],q,o,m);if(A(b,d)){var
r=a(g,b);return c(u[2],fa,r)}var
i=c(v,b,d);if(i){var
s=a(g,p(b));return c(u[2],fb,s)}return i}function
X(a){function
b(b,a){if(15===a[0]){var
d=a[2][2],f=X(a[3][2]),g=X(d);return c(h,c(h,c(h,b,e),g),f)}return c(h,b,e)}return l(n[20],b,d,a)}function
O(a){switch(a){case
0:return fc;case
1:return fd;default:return fe}}function
P(a){switch(a){case
0:return ff;case
1:return fg;default:return fh}}function
z(d,b){function
e(a){var
b=a[4],e=a[3],f=a[2];c(u[2],fi,a[1]);H(d,[0,e,b]);var
g=O(f);return c(u[2],fj,g)}c(n[15],e,b);return a(k[31],fk)}function
az(d,b){function
e(b){H(d,b);return a(k[31],fl)}c(n[15],e,b);return a(k[31],fm)}function
Q(d,q){var
e=q;for(;;){if(e){var
b=e[1],r=e[2];switch(b[0]){case
0:var
s=b[3],t=b[1],v=a(g,b[4]),w=a(g,s);bs(u[2],fn,t[1],w,v);break;case
1:var
x=b[1],y=a(g,b[2]);l(u[2],fo,x[1],y);break;case
2:c(u[2],fp,b[1]);break;case
3:var
z=b[1],A=a(g,b[2]);l(u[2],fq,z[1],A);break;case
4:var
j=b[3],m=j[2],n=b[2],i=n[2],B=j[1],C=n[1],D=b[1],E=m[1],F=P(m[2]),G=a(g,B),I=i[1],J=P(i[2]),K=a(g,C),L=P(i[2]);l9(u[2],fr,L,D,K,J,I,G,F,E);break;case
5:var
f=b[1][1];c(u[2],fs,f[1]);H(d,[0,f[3],f[4]]);var
M=O(f[2]);a(k[31],M);a(k[31],ft);break;case
6:var
h=b[1];c(u[2],fu,h[1]);H(d,[0,h[3],h[4]]);var
N=O(h[2]);a(k[31],N);a(k[31],fv);break;case
7:l(u[2],fw,b[1],b[2]);break;case
8:l(u[2],fx,b[1],b[2]);break;case
9:l(u[2],fy,b[1][1],b[2][1]);break;case
10:l(u[2],fz,b[1][1],b[2][1]);break;case
11:bs(u[2],fA,b[2][1],b[3],b[1]);break;case
12:var
R=b[1],S=a(g,b[2]);l(u[2],fB,R,S);break;case
13:c(u[2],fC,b[1]);break;case
14:var
T=b[1],U=a(g,b[2]);l(u[2],fD,T,U);break;case
15:var
o=b[3],p=b[2],V=o[2],W=p[2];bs(u[2],fE,b[1][1],p[1],o[1]);Q(d,W);a(k[36],0);Q(d,V);a(k[36],0);break;default:var
X=b[1],Y=a(g,b[2]);l(u[2],fF,X,Y)}var
e=r;continue}return a(k[52],k[28])}}function
aj(a){return c(u[4],fG,a)}var
Y=[0,0];function
R(a){Y[1]=0;return 0}function
S(a){return Y[1]}function
b(a){if(ae[1])Q(aj,[0,a,0]);return F(a,Y)}function
aA(b,a){return a[2]-b[2]|0}var
ak=a(n[48],aA);function
aB(b){var
c=b[2],d=c[2],e=b[1];return[0,e,[0,a(ak,c[1]),d]]}function
B(i){function
e(k){var
b=k;for(;;){if(b){var
f=b[2],g=b[1],h=a(i,g[1]);if(c(j,h,d)){var
b=f;continue}var
l=e(f);return[0,[0,h,g[2]],l]}return 0}}return e}function
D(c,b){var
d=a(c,b[4]),e=b[3],f=a(B(c),e);return[0,b[1],b[2],f,d]}function
aC(b){return a(w,b)}function
I(a){return D(aC,a)}function
J(m,l){var
b=m,a=l;for(;;){if(b){if(a){var
g=a[2],f=a[1],i=b[2],e=b[1];if(e[2]===f[2]){var
k=c(h,e[1],f[1]);if(c(j,k,d)){var
b=i,a=g;continue}var
n=J(i,g);return[0,[0,k,e[2]],n]}return f[2]<e[2]?[0,e,J(i,a)]:[0,f,J(b,g)]}return b}return a}}function
Z(e,b,d){var
f=c(h,b[4],d[4]),g=J(b[3],d[3]),i=b[2];return[0,a(e,0),i,g,f]}var
_=[ao,fH,am(0)];function
$(a){if(a){var
d=a[2],b=a[1];if(c(j,p(b[1]),e))return[0,b,d];var
f=$(d);return[0,f[1],[0,b,f[2]]]}throw _}var
T=[ao,fI,am(0)];function
K(c,a){if(a){var
d=a[2],b=a[1];if(b[2]===c)return[0,b,d];var
e=K(c,d);return[0,e[1],[0,b,e[2]]]}throw T}function
s(f){var
g=f[4],m=f[3],k=f[2],l=f[1];if(0===m)switch(k){case
0:if(c(j,g,d))return 0;b([12,l,g]);throw q;case
1:if(M(g,d))return 0;b([14,l,g]);throw q;default:if(bt(g,d))return 0;b([13,l]);throw q}function
v(a){return p(a[1])}var
h=ah(c(n[17],v,m));if(0===k)if(bt(N(g,h),d)){b([1,f,h]);throw q}if(2===k)if(bt(N(g,h),d)){b([2,f[1]]);return 0}if(bt(h,e)){var
s=G(g,h),w=c(o,g,c(i,s,h)),t=[0,l,k,a(B(function(a){return x(a,h)}),m),s];if(0===k)var
r=0;else
if(2===k)var
r=0;else
var
u=[0,f,t,h,w],r=1;if(!r)var
u=[3,f,h];b(u);return[0,t,0]}return[0,f,0]}function
E(o,g,f,d){var
h=g[1],p=d[3],q=g[2];try{var
l=K(q,p)[1],m=c(j,h,e)?a(w,l[1]):c(j,h,af)?l[1]:a(k[3],fJ),n=Z(o,d,D(function(a){return c(i,a,m)},f));b([4,n[1],[0,e,d],[0,m,f]]);return n}catch(a){a=r(a);if(a===T)return d;throw a}}function
aa(b,a){var
d=c(i,y,a);return c(o,b,c(i,a,G(c(h,c(i,y,b),a),d)))}function
al(q,f,H,F){var
g=q[1],j=f[3],I=q[3],t=a(q[2],0);if(0===j){z(I,[0,f,0]);a(k[3],fK)}var
J=a(n[6],j),L=a(n[5],j)[2],M=[0,p(a(n[5],j)[1]),L];function
N(b,a){var
c=b[1],d=b[2];if(A(c,p(a[1]))){var
e=a[2];return[0,p(a[1]),e]}return[0,c,d]}var
u=l(n[20],N,M,J),O=u[2],d=c(h,u[1],e),P=aa(f[4],d),Q=f[3],R=a(B(function(a){return aa(a,d)}),Q),S=[0,[0,a(w,d),t],R],v=[0,a(g,0),0,S,P],T=c(i,y,d),U=a(w,G(c(h,c(i,y,f[4]),d),T)),V=f[3],W=a(B(function(b){var
e=c(i,y,d);return a(w,G(c(h,c(i,y,b),d),e))}),V);b([5,[0,v,[0,a(g,0),0,W,U],f,d,t]]);var
X=s(v),o=a(n[5],X),r=K(O,o[3])[1];function
Y(a){return s(E(g,r,o,a))}var
Z=c(m[17][78],Y,H);function
_(a){return s(E(g,r,o,a))}var
$=c(m[17][78],_,F),C=E(g,r,o,f),ab=D(function(a){return x(a,d)},C);b([3,C,d]);var
ac=s(ab);return[0,a(n[5],ac),Z,$]}function
an(d,i){var
b=i;for(;;){var
f=b[3],e=b[2],a=b[1],g=d[1],j=d[3];if(ae[1])z(j,[0,a,e]);try{var
h=$(a[3])[1],k=function(b,c,d){return function(a){return s(E(c,d,b,a))}}(a,g,h),l=c(m[17][78],k,f),n=function(b,c,d){return function(a){return s(E(c,d,b,a))}}(a,g,h),o=[0,c(m[17][78],n,e),l];return o}catch(c){c=r(c);if(c===_){var
b=al(d,a,e,f);continue}throw c}}}function
ab(k,o){var
f=o;for(;;){var
g=f[2],h=f[1],s=k[3],l=function(a){if(a){var
d=a[2],b=a[1],g=b[3],h=function(a){return c(j,p(a[1]),e)};if(c(n[28],h,g))return[0,b,d];var
f=l(d);return[0,f[1],[0,b,f[2]]]}throw C};if(h){var
t=h[2],u=h[1];try{var
m=l(h),v=m[2],w=m[1],a=w,i=v}catch(b){b=r(b);if(b!==C)throw b;var
a=u,i=t}if(0===a[3]){if(c(j,a[4],d)){b([2,a[1]]);var
f=[0,i,g];continue}b([12,a[1],a[4]]);throw q}var
f=an(k,[0,a,i,g]);continue}if(ae[1])z(s,g);return g}}function
L(o,e){function
y(a){var
b=a[3];if(b)if(c(v,b[1][1],d))return[0,I(a),0];return[0,a,1]}var
f=c(t[1],0,7);function
i(z){var
m=y(z),n=m[2],a=m[1],g=a[3];if(0===g){if(c(v,a[4],d)){b([14,a[1],a[4]]);throw q}return b([2,a[1]])}try{var
o=c(t[6],f,g),i=o[2],j=o[1];if(1===n)if(j)var
k=j[1],D=c(v,k[4],a[4])?(b([7,k[1],a[1]]),k):(b([7,a[1],k[1]]),a),e=[0,[0,D],i];else
var
e=[0,[0,a],i];else
if(i){var
h=i[1];if(A(h[4],a[4]))b([8,h[1],a[1]]);else
b([8,a[1],h[1]]);var
F=A(h[4],a[4])?h:a,e=[0,j,[0,F]]}else
var
e=[0,j,[0,a]];var
p=e[1];if(p){var
s=e[2];if(s){var
u=s[1],w=p[1];if(c(v,w[4],u[4])){b([9,w,I(u)]);throw q}var
x=1}else
var
x=0}else
var
x=0;c(t[10],f,g);var
E=l(t[5],f,g,e);return E}catch(b){b=r(b);if(b===C){var
B=1===n?[0,[0,a],0]:[0,0,[0,a]];return l(t[5],f,g,B)}throw b}}c(n[15],i,e);var
h=[0,0],g=[0,0];function
k(n,f){var
d=f[1];if(d){var
i=f[2];if(i){var
k=i[1],e=d[1];if(c(j,e[4],k[4])){var
l=a(o,0);b([11,l,e,k[1]]);return F([0,l,0,e[3],e[4]],h)}}}var
m=f[2];if(d)F(d[1],g);return m?F(I(m[1]),g):0}c(t[12],k,f);return[0,h[1],g[1]]}var
U=[ao,fL,am(0)];function
ap(g){var
b=c(t[1],0,7);function
h(e,d){try{var
a=c(t[6],b,e),g=p(d);a[1]=c(k[6],a[1],g);var
h=0;return h}catch(a){a=r(a);if(a===C){var
f=[0,p(d)];return l(t[5],b,e,f)}throw a}}function
i(a){var
b=a[3];function
d(a){return h(a[2],a[1])}return c(n[15],d,b)}c(n[15],i,g);var
e=[0,d],a=[0,-1],f=[0,0];function
j(h,g){var
b=g[1];f[1]++;var
i=c(v,b,e[1]),d=i||(-1===a[1]?1:0),j=d?(a[1]=h,e[1]=b,0):d;return j}c(t[12],j,b);if(f[1]<1)throw U;return a[1]}function
aq(i,b){function
c(c,b){var
e=c[3],f=c[2],g=c[1];try{var
h=K(i,b[3])[1],j=M(h[1],d)?[0,g,[0,[0,h[1],b],f],e]:[0,g,f,[0,[0,a(w,h[1]),b],e]];return j}catch(a){a=r(a);if(a===T)return[0,[0,b,g],f,e];throw a}}return l(n[20],c,fM,b)}function
ar(u,t,d,g){var
f=0;function
h(h,d){var
j=d[2],f=d[1];function
m(m,l){var
n=l[2],g=l[1],v=D(function(a){return c(i,a,f)},n),p=Z(u,D(function(a){return c(i,a,g)},j),v);b([4,p[1],[0,g,j],[0,f,n]]);var
h=s(p);if(h){var
d=h[1];if(h[2])return a(k[3],fN);if(t){var
w=c(o,g,e),q=c(i,c(o,f,e),w);b([16,d[1],q]);var
x=c(o,d[4],q),r=[0,d[1],1,d[3],x]}else
var
r=d;return[0,r,m]}return m}return l(n[20],m,h,g)}return l(n[20],h,f,d)}function
ac(d,f,b){var
g=d[3],h=d[1],a=aq(ap(b),b),i=a[1],j=ar(h,f,a[2],a[3]),e=c(k[26],i,j);if(ae[1])z(g,e);return e}function
aD(d,o,e){var
h=d[1],p=d[3];function
q(a){return 2===a[2]?1:0}if(c(n[28],q,e))a(k[3],fO);R(0);function
t(a){return b([6,a])}c(n[15],t,e);var
u=c(m[17][78],s,e);function
v(a){return 0===a[2]?1:0}var
i=c(n[37],v,u),w=i[1],j=L(h,i[2]),x=j[2],y=[0,c(k[26],w,j[1]),x];function
g(b,c){var
a=ab(d,c);return b<50?f(b+1|0,a):bu(f,[0,a])}function
f(e,f){var
a=L(h,f),b=a[2],c=a[1];if(0===c)return b;var
d=[0,c,b];return e<50?g(e+1|0,d):bu(g,[0,d])}function
A(a){return bv(g(0,a))}function
B(a){return bv(f(0,a))}function
l(b){try{var
a=l(B(ac(d,o,b)));return a}catch(a){a=r(a);if(a===U){if(ae[1])z(p,b);return b}throw a}}return l(A(y))}function
V(l,j,i){var
f=l,d=j,e=i;for(;;){if(e){var
g=e[2],b=e[1];switch(b[0]){case
0:if(c(W[4][1],b[1][1],f)){var
d=[0,b,d],e=g;continue}var
e=g;continue;case
1:var
f=[0,b[1][1],f],d=[0,b,d],e=g;continue;case
2:var
e=g;continue;case
3:if(c(W[4][1],b[1][1],f)){var
d=[0,b,d],e=g;continue}var
e=g;continue;case
4:var
m=b[3][2],n=b[2][2];if(c(W[4][1],b[1],f)){var
f=[0,n[1],[0,m[1],f]],d=[0,b,d],e=g;continue}var
e=g;continue;case
5:var
h=b[1],o=h[3];if(c(W[4][1],h[1][1],f)){var
f=[0,o[1],f],d=[0,b,d],e=g;continue}var
e=g;continue;case
6:if(c(W[4][1],b[1][1],f)){var
d=[0,b,d],e=g;continue}var
e=g;continue;case
7:var
e=g;continue;case
8:var
e=g;continue;case
9:var
f=[0,b[1][1],[0,b[2][1],f]],d=[0,b,d],e=g;continue;case
10:var
f=[0,b[1][1],[0,b[2][1],f]],d=[0,b,d],e=g;continue;case
11:var
p=b[3],q=b[2];if(c(W[4][1],b[1],f)){var
f=[0,q[1],[0,p,f]],d=[0,b,d],e=g;continue}var
e=g;continue;case
12:var
f=[0,b[1],f],d=[0,b,d],e=g;continue;case
13:var
f=[0,b[1],f],d=[0,b,d],e=g;continue;case
14:var
f=[0,b[1],f],d=[0,b,d],e=g;continue;case
15:return a(k[3],fP);default:if(c(W[4][1],b[1],f)){var
d=[0,b,d],e=g;continue}var
e=g;continue}}return[0,f,d]}}function
as(a){var
g=a[2],h=a[1];function
i(a){return 2===a[2]?1:0}var
j=c(n[37],i,g)[1];function
e(a){var
b=a[3];if(b)if(c(v,b[1][1],d))return[0,I(a),0];return[0,a,1]}var
f=c(t[1],0,7);function
k(a){var
b=e(a),c=b[1];return l(t[5],f,[0,c[3],c[4]],[0,b[2],a])}c(n[15],k,j);function
m(a){if(0===a[2]){var
d=e(a),g=d[1],i=d[2],j=g[4],k=g[3];try{var
h=c(t[6],f,[0,k,j]);b([10,a,h[2],i===h[1]?1:0]);throw q}catch(a){a=r(a);if(a===C)return 0;throw a}}throw[0,aU,fQ]}return c(n[15],m,h)}var
ad=[ao,fR,am(0)];return[0,j,v,at,A,M,h,o,i,x,N,d,e,y,af,p,g,w,au,av,aw,ax,ay,F,ag,ah,G,q,ai,H,X,O,P,z,az,g,Q,aj,b,S,R,ak,aB,B,D,I,J,Z,_,$,T,K,s,E,aa,al,an,ab,L,U,ap,aq,ar,ac,aD,V,as,ad,function(d,j){var
f=d[1],E=d[3];R(0);function
F(a){return b([6,a])}c(n[15],F,j);function
i(c,a){as(a);var
b=ab(d,a);return c<50?h(c+1|0,b):bu(h,[0,b])}function
h(j,l){function
m(a){return 2===a[2]?1:0}var
a=c(n[37],m,l),b=a[1],d=L(f,a[2]),e=d[2],g=d[1];if(0===g)return c(k[26],b,e);var
h=[0,g,c(k[26],b,e)];return j<50?i(j+1|0,h):bu(i,[0,h])}function
G(a){return bv(i(0,a))}function
H(a){return bv(h(0,a))}function
p(b){try{var
a=p(H(ac(d,0,b)));return a}catch(a){a=r(a);if(a===U){if(ae[1])z(E,b);return b}throw a}}function
I(l){var
d=l;for(;;){var
g=d[1];if(g){var
j=d[2],b=g[1],m=d[3],p=g[2],h=a(f,0),i=a(f,0),q=c(o,b[4],e),r=[0,h,1,b[3],q],s=c(o,a(w,b[4]),e),t=b[3],u=[0,i,1,a(B(w),t),s],v=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,0],a[1]],[0,d,a[2]]]}}(b,i,u),x=c(n[17],v,j),y=function(b,c,d){return function(a){return[0,[0,[0,b[1],c,1],a[1]],[0,d,a[2]]]}}(b,h,r),z=c(n[17],y,j),A=c(k[26],z,x),d=[0,p,A,[0,[0,b[1],[0,b,h,i]],m]];continue}return[0,d[2],d[3]]}}try{var
J=c(m[17][78],s,j),K=function(a){return 0===a[2]?1:0},u=c(n[37],K,J),M=u[2],N=u[1],O=function(a){return 2===a[2]?1:0},v=c(n[37],O,M),P=v[1],x=L(f,v[2]),Q=x[1],T=c(k[26],x[2],P),X=G([0,c(k[26],N,Q),T]),Y=function(a){return 2===a[2]?1:0},y=c(n[37],Y,X),Z=y[2],_=y[1],$=S(0),A=I([0,_,[0,[0,0,Z],0],0]),aa=A[2],af=A[1],ag=function(a){var
b=a[1],f=a[2];R(0);try{p(f);throw ai}catch(a){a=r(a);if(a===q){var
d=V(0,0,S(0)),e=d[1],g=d[2],h=function(a){return c(W[4][1],a[2],e)},i=c(n[37],h,b)[1],j=function(a){return a[1]};return[0,c(n[17],j,i),e,b,g]}throw a}},ah=c(n[17],ag,af),aj=function(e){var
b=c(t[1],0,7),a=[0,-1],d=[0,0];function
f(d){try{c(t[6],b,d)[1]++;var
a=0;return a}catch(a){a=r(a);if(a===C)return l(t[5],b,d,[0,1]);throw a}}function
g(a){var
b=a[1];if(b)return c(n[15],f,b);throw[0,ad,a[4],a[2]]}c(n[15],g,e);function
h(e,b){var
c=d[1]<b[1]?1:0,f=c?(a[1]=e,d[1]=b[1],0):c;return f}c(t[12],h,b);return a[1]},g=function(e){try{var
d=aj(e),p=function(g){var
b=g[3];for(;;){if(b){var
c=b[1],e=b[2],f=c[3];if(d===c[1])return f;var
b=e;continue}return a(k[3],fS)}},f=c(n[37],p,e),q=f[2],s=f[1],h=function(a){var
b=a[4],c=a[3],e=a[2],f=a[1];function
g(b,a){return b===a?1:0}return[0,l(m[17][99],g,d,f),e,c,b]},t=c(n[17],h,s),u=c(n[17],h,q),i=g(t),v=i[2],w=i[1],j=g(u),x=j[2],y=j[1],b=c(W[4][2],d,aa),o=b[1],z=b[3],A=b[2],B=function(b,a){return b===a?1:0},C=l(m[17][132],B,v,x),D=[0,[0,[15,o,[0,A,w],[0,z,y]],0],[0,o[1],C]];return D}catch(a){a=r(a);if(a[1]===ad)return[0,a[2],a[3]];throw a}},D=g(ah),ak=V(D[2],D[1],$)[2];return ak}catch(a){a=r(a);if(a===q)return V(0,0,S(0))[2];throw a}}]}];bw(412,bB,"Omega_plugin.Omega");var
j=a(bB[2],[0,y[17],y[16],y[12],y[13],y[14],y[15],y[22],y[5],y[6],y[2]]),fT=0,d=[0,function(b){var
c=x.caml_obj_tag(b);return 250===c?b[1]:f===c?a(fU[2],b):b}];function
af(b){var
c=a(e[10],b);return a(g[99],c)}function
aD(b){var
c=a(e[10],b);return a(g[86],c)}var
aV=[0,0],aE=[0,0],aF=[0,0],aW=[0,1],aX=[0,1],fV=[0,0];function
fW(a,b){return a[1]}function
ap(b,a){b[1]=a;return 0}function
fX(a){return ap(aV,a)}var
f0=[0,0,fZ,fY,function(a){return aV[1]},fX];c(aG[4],0,f0);function
f1(a){return ap(aE,a)}var
f4=[0,0,f3,f2,function(a){return aE[1]},f1];c(aG[4],0,f4);function
f5(a){return ap(aF,a)}var
f8=[0,0,f7,f6,function(a){return aF[1]},f5];c(aG[4],0,f8);function
f9(a){return ap(aX,a)}var
ga=[0,1,f$,f_,function(a){return aX[1]},f9];c(aG[4],0,ga);function
gb(a){return ap(aW,a)}var
ge=[0,0,gd,gc,function(a){return aW[1]},gb];c(aG[4],0,ge);var
bC=[0,0];function
cl(d){var
a=bC[1];function
b(a){a[1][1]=a[2];return 0}return c(m[17][11],b,a)}function
ag(a){var
b=[0,a];bC[1]=[0,[0,b,a],bC[1]];return b}var
cm=ag(0);function
S(e){var
b=a(k[22],cm[1]),d=c(k[17],gf,b);cm[1]++;return a(w[1][6],d)}var
cn=ag(0);function
gg(b){var
a=c(aq[1],gh,[0,cn[1]]);cn[1]++;return a}var
co=ag(0);function
cp(e){var
b=a(k[22],co[1]),d=c(k[17],gi,b);co[1]++;return a(w[1][6],d)}var
cq=ag(0);function
aH(a){cq[1]++;return cq[1]}var
cr=ag(1e3);function
bD(a){cr[1]++;return cr[1]}var
cs=ag(0);function
ct(a){cs[1]++;return c(aq[1],gj,[0,cs[1]])}function
ar(a){return c(u[4],gk,a)}var
bE=[0,0],aY=c(t[1],0,7),bF=c(t[1],0,7);function
cu(b){bE[1]=0;return a(t[2],aY)}function
bG(b){try{var
a=c(t[6],bF,b);return a}catch(a){a=r(a);if(a===C){var
d=ct(0);l(t[5],aY,d,b);l(t[5],bF,b,d);return d}throw a}}function
aZ(b){try{var
a=c(t[6],aY,b);return a}catch(a){a=r(a);if(a===C){var
d=bE[1];l(t[5],aY,b,d);l(t[5],bF,d,b);bE[1]++;return d}throw a}}function
I(b){return a(h[66][22],b)}function
cv(a){return bs(g[108],0,gl,1,[0,[0,a,0]])}function
s(b){return a(g[146],b)}function
gm(b){return a(g[99],b)}function
G(b){var
c=[0,[0,0,a(d[1],b)],0];return a(g[68],c)}function
a0(b,a){return l(B[42][1],bH[9],b,a)}function
cw(c){return function(d){var
a=d;for(;;){if(a){var
b=a[1],e=a[2],f=b[1];if(c===b[2])return f;var
a=e;continue}throw C}}}var
aI=[0,0];function
cx(a){aI[1]=0;return 0}function
D(b){try{var
c=aI[1],d=a(cw(b),c);return d}catch(b){b=r(b);if(b===C)return a(k[3],gn);throw b}}function
go(b){try{var
d=c(w[1][13][3],b,aI[1]);return d}catch(b){b=r(b);if(b===C)return a(k[3],gp);throw b}}function
Z(b,a){aI[1]=[0,[0,b,a],aI[1]];return 0}var
aJ=[0,0];function
cy(a){return aJ[1]}function
bI(a){aJ[1]=0;return 0}function
cz(c,b){try{var
d=aJ[1],f=a(e[96],c),g=l(m[17][119],f,b,d);return g}catch(b){b=r(b);if(b===C)return a(k[3],gq);throw b}}function
cA(d,c,b,a){aJ[1]=[0,[0,d,[0,c,b,a]],aJ[1]];return 0}function
cB(b){var
a=aX[1];return a?(cl(0),cu(0),cx(0),bI(0)):a}var
gs=c(m[18],as[6],gr),gt=c(m[18],[0,cC,0],gs),gu=c(m[18],as[5],gt),cD=c(m[18],as[7],gu);function
aK(d,c,b){var
f=l(as[4],d,c,b),g=a(gv[21],f);return a(e[8],g)}var
gw=as[7];function
z(a){return aK(gx,gw,a)}function
i(a){return aK(gy,cD,a)}function
O(a){return aK(gA,gz,a)}function
H(a){return aK(gC,gB,a)}var
bJ=[f,function(a){return i(gD)}],bK=[f,function(a){return i(gE)}],bL=[f,function(a){return i(gF)}],a1=[f,function(a){return i(gG)}],a2=[f,function(a){return i(gH)}],a3=[f,function(a){return i(gI)}],ah=[f,function(a){return i(gJ)}],bM=[f,function(a){return i(gK)}],bN=[f,function(a){return i(gL)}],ai=[f,function(a){return H(gM)}],aL=[f,function(a){return H(gN)}],at=[f,function(a){return H(gO)}],a4=[f,function(a){return H(gP)}],a5=[f,function(a){return H(gQ)}],bO=[f,function(a){return H(gR)}],bP=[f,function(a){return H(gS)}],cE=[f,function(a){return O(gT)}],cF=[f,function(a){return O(gU)}],cG=[f,function(a){return O(gV)}],cH=[f,function(a){return i(gW)}],cI=[f,function(a){return O(gX)}],cJ=[f,function(a){return O(gY)}],cK=[f,function(a){return O(gZ)}],cL=[f,function(a){return O(g0)}],cM=[f,function(a){return O(g1)}],cN=[f,function(a){return O(g2)}],cO=[f,function(a){return O(g3)}],au=[f,function(a){return i(g4)}],cP=[f,function(a){return i(g5)}],cQ=[f,function(a){return i(g6)}],bQ=[f,function(a){return i(g7)}],bR=[f,function(a){return i(g8)}],cR=[f,function(a){return i(g9)}],cS=[f,function(a){return i(g_)}],cT=[f,function(a){return i(g$)}],cU=[f,function(a){return i(ha)}],cV=[f,function(a){return i(hb)}],cW=[f,function(a){return i(hc)}],cX=[f,function(a){return i(hd)}],cY=[f,function(a){return i(he)}],cZ=[f,function(a){return i(hf)}],c0=[f,function(a){return i(hg)}],c1=[f,function(a){return i(hh)}],c2=[f,function(a){return i(hi)}],a6=[f,function(a){return i(hj)}],aM=[f,function(a){return i(hk)}],c3=[f,function(a){return i(hl)}],c4=[f,function(a){return i(hm)}],c5=[f,function(a){return i(hn)}],c6=[f,function(a){return i(ho)}],c7=[f,function(a){return i(hp)}],c8=[f,function(a){return i(hq)}],c9=[f,function(a){return i(hr)}],c_=[f,function(a){return i(hs)}],c$=[f,function(a){return i(ht)}],da=[f,function(a){return i(hu)}],db=[f,function(a){return i(hv)}],dc=[f,function(a){return i(hw)}],dd=[f,function(a){return i(hx)}],a7=[f,function(a){return i(hy)}],de=[f,function(a){return i(hz)}],df=[f,function(a){return i(hA)}],dg=[f,function(a){return i(hB)}],dh=[f,function(a){return i(hC)}],di=[f,function(a){return i(hD)}],a8=[f,function(a){return i(hE)}],dj=[f,function(a){return i(hF)}],dk=[f,function(a){return i(hG)}],dl=[f,function(a){return i(hH)}],dm=[f,function(a){return i(hI)}],dn=[f,function(a){return i(hJ)}],dp=[f,function(a){return i(hK)}],dq=[f,function(a){return i(hL)}],dr=[f,function(a){return i(hM)}],ds=[f,function(a){return i(hN)}],dt=[f,function(a){return H(hO)}],du=[f,function(a){return i(hP)}],dv=[f,function(a){return H(hQ)}],dw=[f,function(a){return H(hR)}],dx=[f,function(a){return i(hS)}],dy=[f,function(a){return i(hT)}],dz=[f,function(a){return i(hU)}],dA=[f,function(a){return i(hV)}],dB=[f,function(a){return i(hW)}],dC=[f,function(a){return i(hX)}],dD=[f,function(a){return i(hY)}],dE=[f,function(a){return i(hZ)}],bS=[f,function(a){return i(h0)}],bT=[f,function(a){return i(h1)}],a9=[f,function(a){return H(h2)}],a_=[f,function(a){return H(h3)}],bU=[f,function(a){return H(h4)}],bV=[f,function(a){return H(h5)}],bW=[f,function(a){return z(h6)}],dF=[f,function(a){return z(h7)}],dG=[f,function(a){return z(h8)}],bX=[f,function(a){return z(h9)}],bY=[f,function(a){return z(h_)}],dH=[f,function(a){return z(h$)}],dI=[f,function(a){return z(ia)}],dJ=[f,function(a){return z(ib)}],a$=[f,function(a){return z(ic)}],bZ=[f,function(a){return z(id)}],b0=[f,function(a){return z(ie)}],dK=[f,function(a){return i(ig)}],dL=[f,function(a){return i(ih)}],dM=[f,function(a){return i(ii)}],dN=[f,function(a){return i(ij)}],dO=[f,function(a){return i(ik)}],dP=[f,function(a){return i(il)}],dQ=[f,function(a){return i(im)}],dR=[f,function(a){return i(io)}],dS=[f,function(a){return i(ip)}],dT=[f,function(a){return i(iq)}],dU=[f,function(a){return i(ir)}],dV=[f,function(a){return i(is)}],dW=[f,function(a){return i(it)}],dX=[f,function(a){return i(iu)}],dY=[f,function(a){return i(iv)}],dZ=[f,function(a){return i(iw)}],d0=[f,function(a){return i(ix)}],d1=[f,function(a){return i(iy)}],d2=[f,function(a){return i(iz)}],d3=[f,function(a){return i(iA)}],d4=[f,function(a){return i(iB)}],d5=[f,function(a){return i(iC)}],d6=[f,function(a){return i(iD)}],d7=[f,function(a){return i(iE)}],d8=[f,function(a){return i(iF)}],d9=[f,function(a){return i(iG)}],d_=[f,function(a){return i(iH)}],d$=[f,function(a){return i(iI)}],ba=[f,function(a){return z(iJ)}],b1=[f,function(a){return z(iK)}],b2=[f,function(a){return z(iL)}],bb=[f,function(a){return z(iM)}],ea=[f,function(a){return z(iN)}],b3=[f,function(a){return z(iO)}],eb=[f,function(a){return z(iP)}];function
X(i,h){var
b=a(iQ[2],0),j=a(iR[17],b),m=a(d[1],h),f=c(e[3],j,m);if(10===f[0]){var
g=f[1][1];if(c(bH[2],b,[1,g]))return[1,g]}var
n=c(k[17],i,iS),o=a(T[3],n);return l(P[3],0,iT,o)}var
ec=[f,function(a){return X(iU,a5)}],ed=[f,function(a){return X(iV,bO)}],ee=[f,function(a){return X(iW,a4)}],b4=[f,function(a){return X(iX,a9)}],_=[f,function(a){return X(iY,a_)}],i0=[f,function(a){return X(iZ,bU)}],i2=[f,function(a){return X(i1,bV)}],bc=[f,function(a){return X(i3,ba)}];function
i4(b){var
c=a(w[1][6],b);return a(e[10],c)}function
Q(c,b){var
f=[0,a(d[1],ai),[0,c,b]];return a(e[21],f)}function
bd(c,b){var
f=[0,a(d[1],aL),[0,c,b]];return a(e[21],f)}function
ef(c,b){var
f=[0,a(d[1],a4),[0,c,b]];return a(e[21],f)}function
be(f,c,b){var
g=[0,a(d[1],bb),[0,f,c,b]];return a(e[21],g)}function
aN(c,b){return be(a(d[1],ah),c,b)}function
i5(c,b){var
f=[0,a(d[1],a9),[0,c,b]];return a(e[21],f)}function
$(c,b){var
f=[0,a(d[1],a_),[0,c,b]];return a(e[21],f)}function
aa(b){var
c=[0,a(d[1],at),[0,b]];return a(e[21],c)}function
aO(c,b){var
f=[0,a(d[1],b1),[0,c,b]];return a(e[21],f)}function
bf(c,b){var
f=[0,a(d[1],b2),[0,c,b]];return a(e[21],f)}function
Y(b){var
c=[0,a(d[1],ba),[0,b]];return a(e[21],c)}function
i6(c,b){return be(a(d[1],bM),c,b)}function
ab(b){var
c=[0,a(d[1],bP),[0,b]];return a(e[21],c)}function
A(b){function
f(b){if(c(j[1],b,j[12]))return a(d[1],bJ);var
g=[0,f(c(j[9],b,j[13]))],h=j[11],i=c(j[10],b,j[13]),k=c(j[1],i,h)?a(d[1],bK):a(d[1],bL);return a(e[21],[0,k,g])}if(c(j[1],b,j[11]))return a(d[1],a1);var
g=[0,f(a(j[15],b))],h=c(j[4],b,j[11])?a(d[1],a2):a(d[1],a3);return a(e[21],[0,h,g])}function
aj(i,n){function
g(b,a){return l(e[95],i,b,a)}var
j=c(e[83],i,n),b=j[2],f=j[1],h=c(e[3],i,f);if(b){var
k=b[2];if(k){var
m=k[2];if(m){if(!m[2])if(g(a(d[1],bb),f))return[1,16,b]}else{if(g(f,a(d[1],bS)))return[1,17,b];if(g(f,a(d[1],bT)))return[1,18,b];if(g(f,a(d[1],a9)))return[1,19,b];if(g(f,a(d[1],bV)))return[1,20,b];if(g(f,a(d[1],bU)))return[1,21,b];if(g(f,a(d[1],a_)))return[1,22,b];if(g(f,a(d[1],b1)))return[1,25,b];if(g(f,a(d[1],b2)))return[1,26,b];if(g(f,a(d[1],d$)))return[1,30,b];if(g(f,a(d[1],bW)))return[1,31,b];if(g(f,a(d[1],dF)))return[1,32,b];if(g(f,a(d[1],dG)))return[1,33,b];if(g(f,a(d[1],bX)))return[1,34,b]}}else
if(g(f,a(d[1],ba)))return[1,29,b]}else{if(g(f,a(d[1],b3)))return[1,27,b];if(g(f,a(d[1],eb)))return[1,28,b]}switch(h[0]){case
1:if(!b)return[0,h[1]];break;case
6:if(h[1]){if(!b){var
o=a(T[3],i7);return l(P[6],0,0,o)}}else
if(!b)return[2,h[2],h[3]];break;case
10:var
p=a(b5[36],[1,h[1][1]]);return[1,[0,a(b6[20],p)],b];case
11:var
q=a(b5[36],[2,h[1][1]]);return[1,[0,a(b6[20],q)],b];case
12:var
r=a(b5[36],[3,h[1][1]]);return[1,[0,a(b6[20],r)],b]}return 0}var
eg=bH[9];function
av(h,b,k){var
i=l(b7[80],0,h,b),m=l(eg,h,b,k),j=c(e[83],b,m),f=j[2],g=j[1];c(e[3],b,g);if(!f){if(c(i,g,a(d[1],ah)))return[1,23,f];if(c(i,g,a(d[1],a$)))return[1,24,f]}return 0}function
aP(h,m){function
g(b,a){return l(e[95],h,b,a)}var
i=c(e[83],h,m),b=i[2],f=i[1],j=c(e[3],h,f);if(b){var
k=b[2];if(k){if(!k[2]){if(g(f,a(d[1],ai)))return[1,0,b];if(g(f,a(d[1],aL)))return[1,1,b];if(g(f,a(d[1],a4)))return[1,2,b];if(g(f,a(d[1],dH)))return[1,6,b];if(g(f,a(d[1],dI)))return[1,7,b];if(g(f,a(d[1],bY)))return[1,8,b]}}else{if(g(f,a(d[1],a5)))return[1,3,b];if(g(f,a(d[1],bO)))return[1,5,b];if(g(f,a(d[1],at)))return[1,4,b];if(g(f,a(d[1],dJ)))return[1,9,b];if(g(f,a(d[1],bZ)))return[1,10,b];if(g(f,a(d[1],a2)))return[1,13,b];if(g(f,a(d[1],a3)))return[1,12,b];if(g(f,a(d[1],bP)))return[1,15,b]}}else{if(g(f,a(d[1],b0)))return[1,11,b];if(g(f,a(d[1],a1)))return[1,14,b];if(1===j[0])return[0,j[1]]}return 0}function
eh(g,o){function
b(b,a){return l(e[95],g,b,a)}function
f(n){var
l=c(e[83],g,n),h=l[2],i=l[1];if(h){if(!h[2]){var
m=h[1];if(b(i,a(d[1],bL))){var
o=f(m),p=c(j[8],j[13],o);return c(j[6],j[12],p)}if(b(i,a(d[1],bK))){var
q=f(m);return c(j[8],j[13],q)}}}else
if(b(i,a(d[1],bJ)))return j[12];return a(k[3],i8)}var
m=c(e[83],g,o),h=m[2],i=m[1];if(h){if(!h[2]){var
n=h[1];if(b(i,a(d[1],a2)))return f(n);if(b(i,a(d[1],a3))){var
p=f(n);return a(j[17],p)}}}else
if(b(i,a(d[1],a1)))return j[11];return a(k[3],i9)}function
bg(C,B,f,b){function
d(f,h,u){var
b=c(e[3],C,u);if(5===b[0]){var
ao=b[3],ap=b[2],aq=[0,d(f,h,b[1]),ap,ao];return a(e[17],aq)}if(h){var
i=h[1];if(typeof
i==="number")switch(i){case
0:var
l=h[2];switch(b[0]){case
6:var
G=b[2],H=b[1],I=[0,H,G,d(f+1|0,l,b[3])];return a(e[18],I);case
7:var
J=b[2],K=b[1],L=[0,K,J,d(f+1|0,l,b[3])];return a(e[19],L);case
8:var
M=b[3],N=b[2],O=b[1],P=[0,O,N,M,d(f+1|0,l,b[4])];return a(e[20],P);case
14:var
g=0;break;default:var
g=1}break;case
1:var
p=h[2];switch(b[0]){case
6:var
T=b[3],U=b[1],W=[0,U,d(f,p,b[2]),T];return a(e[18],W);case
7:var
X=b[3],Y=b[1],Z=[0,Y,d(f,p,b[2]),X];return a(e[19],Z);case
8:var
_=b[4],$=b[2],aa=b[1],ab=[0,aa,$,d(f,p,b[3]),_];return a(e[20],ab);case
14:var
g=0;break;default:var
g=1}break;case
2:var
ac=h[2];switch(b[0]){case
9:var
ad=b[2],ae=[0,d(f,ac,b[1]),ad];return a(e[21],ae);case
14:var
g=0;break;default:var
g=1}break;default:var
af=h[2];switch(b[0]){case
9:var
ag=b[1],q=a(m[19][8],b[2]);q[1]=d(f,af,V(q,0)[1]);return a(e[21],[0,ag,q]);case
14:var
g=0;break;default:var
g=1}}else
if(0===i[0]){var
y=i[1],ah=h[2];switch(b[0]){case
9:var
ai=b[1],r=a(m[19][8],b[2]),z=y-1|0,A=y-1|0,aj=d(f,ah,V(r,z)[z+1]);V(r,A)[A+1]=aj;return a(e[21],[0,ai,r]);case
14:var
g=0;break;default:var
g=1}}else{var
s=i[1],ak=h[2];switch(b[0]){case
13:var
al=b[3],am=b[2],an=b[1],t=a(m[19][8],b[4]);t[s+1]=d(f,ak,V(t,s)[s+1]);return a(e[30],[0,an,am,al,t]);case
14:var
g=0;break;default:var
g=1}}if(g){var
D=a(m[17][1],h),E=a(k[22],D),F=c(k[17],i_,E);return a(k[3],F)}var
v=b[1],n=v[2],o=n[3],w=v[1],j=w[2],Q=n[2],R=n[1],x=a(m[19][8],o),S=d(f+(o.length-1)|0,h,V(o,j)[j+1]);V(x,j)[j+1]=S;return a(e[31],[0,w,[0,R,Q,x]])}return c(B,f,u)}return d(1,f,b)}function
ei(s,r,q){var
b=r,f=q;for(;;){var
d=c(e[3],s,f);if(5===d[0]){var
f=d[1];continue}if(b){var
h=b[1];if(typeof
h==="number")switch(h){case
0:var
i=b[2];switch(d[0]){case
6:var
b=i,f=d[3];continue;case
7:var
b=i,f=d[3];continue;case
8:var
b=i,f=d[4];continue;case
14:var
g=0;break;default:var
g=1}break;case
1:var
j=b[2];switch(d[0]){case
6:var
b=j,f=d[2];continue;case
7:var
b=j,f=d[2];continue;case
8:var
b=j,f=d[3];continue;case
14:var
g=0;break;default:var
g=1}break;case
2:var
w=b[2];switch(d[0]){case
9:var
b=w,f=d[1];continue;case
14:var
g=0;break;default:var
g=1}break;default:var
x=b[2];switch(d[0]){case
9:var
b=x,f=V(d[2],0)[1];continue;case
14:var
g=0;break;default:var
g=1}}else
if(0===h[0]){var
y=b[2],z=h[1];switch(d[0]){case
9:var
o=z-1|0,b=y,f=V(d[2],o)[o+1];continue;case
14:var
g=0;break;default:var
g=1}}else{var
p=h[1],A=b[2];switch(d[0]){case
13:var
b=A,f=V(d[4],p)[p+1];continue;case
14:var
g=0;break;default:var
g=1}}if(g){var
t=a(m[17][1],b),u=a(k[22],t),v=c(k[17],i$,u);return a(k[3],v)}var
l=d[1],n=l[1][2],f=V(l[2][3],n)[n+1];continue}return f}}function
b8(g,f,d,c){var
b=[0,a(e[9],0)],h=bg(g,function(d,c){b[1]=c;return a(e[9],d)},d,c),i=b[1],j=[0,[0,a(w[1][6],ja)],f,h];return[0,a(e[19],j),i]}function
J(i){function
b(b){var
d=a(B[42][6],b),e=a(m[17][9],i);function
f(c,a){return a0(b,a)}var
h=bg(a(B[42][4],b),f,e,d);return c(g[5],h,2)}return a(o[67][8],b)}function
ac(c){var
b=c;for(;;)switch(b[0]){case
0:var
d=b[2],e=b[1];a(k[31],jb);ac(e);a(k[31],jc);ac(d);return a(k[31],jd);case
1:var
f=b[1];a(k[31],je);var
b=f;continue;case
2:var
g=b[2],h=b[1];a(k[31],jf);ac(h);a(k[31],jg);ac(g);return a(k[31],jh);case
3:var
i=a(w[1][8],b[1]);return a(k[31],i);case
4:var
l=a(j[16],b[1]);return a(k[31],l);default:return a(k[31],ji)}}function
K(c){var
b=c;for(;;)switch(b[0]){case
0:return a(k[3],jj);case
1:var
b=b[1];continue;case
2:var
b=b[1];continue;case
3:return aZ(b[1]);case
4:return-1;default:return-1}}function
v(b){switch(b[0]){case
0:var
c=b[1],f=v(b[2]),g=[0,v(c),f],h=[0,a(d[1],ai),g];return a(e[21],h);case
1:var
i=[0,v(b[1])],j=[0,a(d[1],at),i];return a(e[21],j);case
2:var
k=b[1],l=v(b[2]),m=[0,v(k),l],n=[0,a(d[1],aL),m];return a(e[21],n);case
3:return a(e[10],b[1]);case
4:return A(b[1]);default:return b[1]}}function
ej(i,h){var
p=0;return function(q){var
c=p,b=q;for(;;){switch(b[0]){case
0:var
d=b[1];if(2===d[0]){var
e=d[1];if(3===e[0]){var
f=d[2];if(4===f[0]){var
k=b[2],n=f[1],c=[0,[0,n,aZ(e[1])],c],b=k;continue}}}break;case
4:var
o=b[1],g=aH(0);Z(i,g);return[0,g,h,a(m[17][9],c),o]}var
j=a(T[3],jk);return l(P[3],0,0,j)}}}function
E(b){function
c(a){if(a){var
d=a[1],e=d[2],f=d[1],g=c(a[2]);return[0,[2,[3,bG(e)],[4,f]],g]}return[4,b[4]]}return c(b[3])}function
b9(b,a,c){var
d=l(b7[19],b,a,c);return l_(jl[4],0,0,0,0,0,0,0,b,a,d)}function
b_(f,k,b,j){function
g(g){var
l=a(B[42][6],g),n=a(B[42][5],g),o=a(m[17][9],k),h=b8(a(B[42][4],g),f,o,l),i=h[1],p=h[2];function
q(h){var
k=a(e[9],1),l=[0,f,b,a(e[9],2),k,p,j],m=[0,a(d[1],dW),l],o=a(e[21],m),q=[0,a(e[9],1),[0,b,0]],r=a(e[34],q),s=[0,[0,a(w[1][6],jm)],r,o],t=a(e[19],s),u=c(e[33],f,e[14]),v=[0,[0,a(w[1][6],jn)],u,t],x=[0,a(e[19],v),[0,i,0]],y=a(e[34],x),g=b9(n,h,a(e[21],[0,i,[0,b]])),z=g[1];return[0,z,a(e[34],[0,y,[0,g[2],0]])]}return c(ek[2],0,q)}return a(o[67][8],g)}function
bh(e,c,b){return b_(a(d[1],ah),e,c,b)}function
el(e,c,b){return b_(a(d[1],a$),e,c,b)}function
aw(d,c,b){return bh(d,c,a(e[34],[0,b[1],b[2]]))}function
em(d,c,b){return el(d,c,a(e[34],[0,b[1],b[2]]))}function
b$(d,b){function
f(f){var
i=a(B[42][5],d),j=c(B[42][8],d,b),g=c(e[3],f,j);if(6===g[0]){var
h=b9(i,f,g[2]),k=h[1];return[0,k,a(e[34],[0,b,[0,h[2],0]])]}throw[0,aU,jo]}return c(ek[2],0,f)}function
p(i,h,g){function
b(b){var
j=a(B[42][6],b),k=a(m[17][9],i),l=a(d[1],ah),f=b8(a(B[42][4],b),l,k,j),n=f[2],o=f[1];function
p(c){return ei(a(B[42][4],b),c,n)}var
q=c(m[17][69],p,h),r=[0,g,c(m[18],q,[0,o,0])];return b$(b,a(e[34],r))}return a(o[67][8],b)}function
ax(f,h){function
b(b){var
d=a(B[42][4],b);function
j(l,k){if(0===l)return a0(b,k);var
f=c(e[3],d,k);if(9===f[0]){var
g=f[2];if(2===g.length-1){var
m=f[1],n=g[2],h=c(e[3],d,g[1]);if(9===h[0]){var
i=h[2];if(2===i.length-1){var
o=h[1],p=i[1],q=a0(b,i[2]),r=j(l-1|0,n),s=[0,m,[0,a(e[21],[0,o,[0,p,q]]),r]];return a(e[21],s)}}throw[0,aU,jq]}}throw[0,aU,jp]}var
i=a(m[17][1],f),k=a(m[17][1],h)-i|0,l=a(B[42][6],b),n=a(m[17][9],f),o=bg(d,function(b,a){return j(k,a)},n,l);return c(g[5],o,2)}return a(o[67][9],b)}function
ay(f,i){var
b=i[2],e=i[1];switch(e[0]){case
0:var
k=e[2],g=e[1];if(0===b[0]){var
l=b[1],s=b[2],t=K(l),u=K(g);if(c(j[19],u,t)){var
m=ay([0,jr,f],[0,k,b]),v=m[1],w=[0,g,m[2]];return[0,[0,p(f,js,a(d[1],au)),v],w]}var
n=ay([0,jt,f],[0,e,s]),x=n[1],z=[0,l,n[2]];return[0,[0,p(f,ju,a(d[1],bQ)),x],z]}var
A=K(b),B=K(g);if(c(j[19],B,A)){var
o=ay([0,jv,f],[0,k,b]),C=o[1],D=[0,g,o[2]];return[0,[0,p(f,jw,a(d[1],au)),C],D]}return[0,[0,p(f,jx,a(d[1],bR)),0],[0,b,e]];case
4:var
N=e[1];switch(b[0]){case
0:var
h=0;break;case
4:var
O=[4,c(y[12],N,b[1])];return[0,[0,J(f),0],O];default:var
h=1}break;default:var
h=0}if(!h)if(0===b[0]){var
q=b[1],E=b[2],F=K(e),G=K(q);if(c(j[19],G,F)){var
r=ay([0,jy,f],[0,e,E]),H=r[1],I=[0,q,r[2]];return[0,[0,p(f,jz,a(d[1],bQ)),H],I]}return[0,0,[0,e,b]]}var
L=K(b),M=K(e);return c(j[18],M,L)?[0,[0,p(f,jA,a(d[1],bR)),0],[0,b,e]]:[0,0,[0,e,b]]}function
en(l,u,f,t,b){function
e(b,i){var
f=i[1];if(f){var
g=i[2],h=f[2],m=f[1],n=m[2],v=m[1];if(g){var
k=g[2],o=g[1],q=o[2],w=o[1];if(n===q){var
r=p(b,jB,a(d[1],c2)),x=j[11],z=c(y[14],t,w),A=c(y[14],u,v),B=c(y[12],A,z);if(c(j[1],B,x)){var
C=p(b,jC,a(d[1],a7)),D=[0,C,e(b,[0,h,k])];return[0,r,[0,J([0,jE,[0,jD,b]]),D]]}return[0,r,e([0,jF,b],[0,h,k])]}if(c(j[19],n,q)){var
E=e([0,jG,b],[0,h,g]);return[0,p(b,jH,a(d[1],a6)),E]}var
F=e([0,jI,b],[0,f,k]);return[0,p(b,jJ,a(d[1],aM)),F]}var
G=e([0,jK,b],[0,h,0]);return[0,p(b,jL,a(d[1],a6)),G]}var
s=i[2];if(s){var
H=e([0,jM,b],[0,0,s[2]]);return[0,p(b,jN,a(d[1],aM)),H]}return[0,ax(l,b),0]}return e(l,[0,f,b])}function
bi(l,f,t,b){function
e(b,i){var
f=i[1];if(f){var
g=i[2],h=f[2],m=f[1],n=m[2],u=m[1];if(g){var
k=g[2],o=g[1],q=o[2],v=o[1];if(n===q){var
r=p(b,jO,a(d[1],c5)),w=j[11],x=c(y[14],t,v),z=c(y[12],u,x);if(c(j[1],z,w)){var
A=p(b,jP,a(d[1],a7)),B=[0,A,e(b,[0,h,k])];return[0,r,[0,J([0,jR,[0,jQ,b]]),B]]}return[0,r,e([0,jS,b],[0,h,k])]}if(c(j[19],n,q)){var
C=e([0,jT,b],[0,h,g]);return[0,p(b,jU,a(d[1],au)),C]}var
D=e([0,jV,b],[0,f,k]);return[0,p(b,jW,a(d[1],aM)),D]}var
E=e([0,jX,b],[0,h,0]);return[0,p(b,jY,a(d[1],au)),E]}var
s=i[2];if(s){var
F=e([0,jZ,b],[0,0,s[2]]);return[0,p(b,j0,a(d[1],aM)),F]}return[0,ax(l,b),0]}return e(l,[0,f,b])}function
ca(e,b){if(b){var
f=b[2],g=c(j[4],b[1][1],j[11])?a(d[1],c3):a(d[1],c4),h=p(e,j1,g);return[0,h,ca(e,f)]}return[0,J(e),0]}function
aQ(f,g,b){switch(b[0]){case
0:var
n=b[2],h=aQ([0,j2,f],g,b[1]),o=h[2],q=h[1],i=aQ([0,j3,f],g,n),r=[0,o,i[2]],s=c(m[18],q,i[1]);return[0,[0,p(f,j4,a(d[1],df)),s],r];case
1:var
t=b[1],u=[2,t,[4,a(j[17],g)]],v=[0,J([0,j5,f]),0];return[0,[0,p(f,j6,a(d[1],dg)),v],u];case
2:var
k=b[2],w=b[1];if(4===k[0]){var
y=[2,w,[4,c(j[8],g,k[1])]],z=[0,J([0,j8,f]),0];return[0,[0,p(f,j9,a(d[1],cQ)),z],y]}var
x=a(T[3],j7);return l(P[6],0,0,x);case
3:return[0,0,[2,b,[4,g]]];case
4:var
B=[4,c(j[8],g,b[1])];return[0,[0,J(f),0],B];default:var
C=b[1],D=[0,A(g),C],E=[0,a(d[1],aL),D];return[0,0,[5,a(e[21],E)]]}}function
bj(c){function
e(b,f){if(f){var
g=e([0,j_,b],f[2]);return[0,p(b,j$,a(d[1],c6)),g]}return[0,ax(c,b),0]}return function(a){return e(c,a)}}function
eo(c){function
e(b,f){if(f){var
g=e([0,ka,b],f[2]);return[0,p(b,kb,a(d[1],au)),g]}return[0,ax(c,b),0]}return function(a){return e(c,a)}}function
bk(c){function
e(b,f){if(f){var
g=e([0,kc,b],f[2]);return[0,p(b,kd,a(d[1],a6)),g]}return[0,ax(c,b),0]}return function(a){return e(c,a)}}function
bl(f,b){switch(b[0]){case
0:var
k=b[2],g=bl([0,ke,f],b[1]),n=g[2],o=g[1],h=bl([0,kf,f],k),q=[0,n,h[2]],r=c(m[18],o,h[1]);return[0,[0,p(f,kg,a(d[1],dh)),r],q];case
1:var
s=b[1];return[0,[0,p(f,kh,a(d[1],dj)),0],s];case
2:var
i=b[2],t=b[1];if(4===i[0]){var
v=[2,t,[4,a(j[17],i[1])]],w=[0,J([0,kj,f]),0];return[0,[0,p(f,kk,a(d[1],di)),w],v]}var
u=a(T[3],ki);return l(P[6],0,0,u);case
3:var
x=[2,b,[4,j[14]]];return[0,[0,p(f,kl,a(d[1],a8)),0],x];case
4:var
y=[4,a(j[17],b[1])];return[0,[0,J(f),0],y];default:var
z=[0,b[1]],A=[0,a(d[1],at),z];return[0,0,[5,a(e[21],A)]]}}function
U(h,g,l){function
n(j,d){try{var
b=cz(h,d),i=b[1],l=a(e[10],b[2]),m=[0,[0,bh(g,a(e[10],i),l),0],[3,i]];return m}catch(b){b=r(b);if(a(P[18],b)){var
c=cp(0),f=S(0);cA(d,c,f,j);var
k=a(e[10],f);return[0,[0,bh(g,a(e[10],c),k),0],[3,c]]}throw b}}try{var
i=aP(h,l);if(typeof
i==="number")var
f=0;else
switch(i[0]){case
0:var
o=[0,0,[3,i[1]]],f=1;break;case
1:var
q=i[1];if(typeof
q==="number")if(16<=q)var
f=0;else{switch(q){case
0:var
s=i[2];if(s){var
t=s[2];if(t)if(t[2])var
f=0,b=0;else
var
Y=t[1],H=U(h,[0,km,g],s[1]),Z=H[2],_=H[1],I=U(h,[0,kn,g],Y),$=I[1],J=ay(g,[0,Z,I[2]]),aa=J[2],ab=c(m[18],$,J[1]),k=[0,c(m[18],_,ab),aa],b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
1:var
u=i[2];if(u){var
v=u[2];if(v)if(v[2])var
f=0,b=0;else{var
ac=v[1],K=U(h,[0,ko,g],u[1]),w=K[2],L=K[1],M=U(h,[0,kp,g],ac),x=M[2],N=M[1];if(4===x[0])var
Q=aQ(g,x[1],w),aj=Q[2],ak=c(m[18],N,Q[1]),y=[0,c(m[18],L,ak),aj];else
if(4===w[0])var
ae=w[1],af=p(g,kq,a(d[1],cR)),O=aQ(g,ae,x),ag=O[2],ah=c(m[18],N,[0,af,O[1]]),y=[0,c(m[18],L,ah),ag];else
var
y=n(0,l);var
k=y,b=1}else
var
f=0,b=0}else
var
f=0,b=0;break;case
2:var
z=i[2];if(z){var
B=z[2];if(B)if(B[2])var
f=0,b=0;else
var
al=z[1],am=[0,B[1]],an=[0,a(d[1],at),am],ao=[0,al,a(e[21],an)],ap=[0,a(d[1],ai),ao],R=U(h,g,a(e[21],ap)),aq=R[2],ar=R[1],k=[0,[0,G(ee),ar],aq],b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
3:var
C=i[2];if(C)if(C[2])var
f=0,b=0;else
var
as=C[1],au=[0,as,A(j[12])],av=[0,a(d[1],ai),au],T=U(h,g,a(e[21],av)),aw=T[2],ax=T[1],k=[0,[0,G(ec),ax],aw],b=1;else
var
f=0,b=0;break;case
4:var
D=i[2];if(D)if(D[2])var
f=0,b=0;else
var
V=U(h,[0,kr,g],D[1]),az=V[1],W=bl(g,V[2]),aA=W[2],k=[0,c(m[18],az,W[1]),aA],b=1;else
var
f=0,b=0;break;case
5:var
E=i[2];if(E)if(E[2])var
f=0,b=0;else
var
aB=E[1],aC=[0,aB,A(j[14])],aD=[0,a(d[1],ai),aC],X=U(h,g,a(e[21],aD)),aE=X[2],aF=X[1],k=[0,[0,G(ed),aF],aE],b=1;else
var
f=0,b=0;break;case
15:var
F=i[2];if(F)if(F[2])var
f=0,b=0;else
var
k=n(1,F[1]),b=1;else
var
f=0,b=0;break;case
12:case
13:case
14:try{var
aG=[0,0,[4,eh(h,l)]],k=aG,b=1}catch(c){c=r(c);if(!a(P[18],c))throw c;var
k=n(0,l),b=1}break;default:var
f=0,b=0}if(b)var
o=k,f=1}else
var
f=0;break;default:var
f=0}if(!f)var
o=n(0,l);return o}catch(b){b=r(b);if(a(ad[5],b))return n(0,l);throw b}}function
cb(e,c,b){switch(c[0]){case
2:var
f=c[1],i=c[2];switch(b[0]){case
2:if(3===f[0]){var
m=[2,[3,f[1]],[0,c[2],b[2]]];return[0,p(e,kt,a(d[1],dd)),m]}break;case
3:var
n=[2,[3,b[1]],[0,i,[4,j[12]]]];return[0,p(e,ku,a(d[1],dc)),n]}break;case
3:var
g=c[1];switch(b[0]){case
2:var
o=[2,[3,g],[0,b[2],[4,j[12]]]];return[0,p(e,kv,a(d[1],db)),o];case
3:var
q=[2,[3,g],[4,j[13]]];return[0,p(e,kw,a(d[1],da)),q]}break}ac(c);a(k[36],0);ac(b);a(k[36],0);a(k[52],k[1][27]);var
h=a(T[3],ks);return l(P[6],0,0,h)}function
aR(f,b){switch(b[0]){case
2:var
g=b[1];if(3===g[0]){var
h=b[2],k=g[1];if(4===h[0])return[0,0,b];var
e=function(b){switch(b[0]){case
0:var
d=b[1],f=e(b[2]),g=e(d);return c(y[12],g,f);case
4:return b[1];default:var
h=a(T[3],ky);return l(P[6],0,0,h)}},m=[2,[3,k],[4,e(h)]];return[0,[0,J([0,kz,f]),0],m]}break;case
3:var
n=[2,[3,b[1]],[4,j[12]]];return[0,[0,p(f,kA,a(d[1],c$)),0],n]}ac(b);var
i=a(T[3],kx);return l(P[6],0,0,i)}function
az(b,g){switch(g[0]){case
0:var
e=g[2],f=g[1];switch(e[0]){case
0:var
h=e[1],v=e[2],w=K(h);if(K(f)===w){var
i=cb([0,kB,b],f,h),x=i[2],y=i[1],z=p(b,kC,a(d[1],cP)),k=az(b,[0,x,v]);return[0,[0,z,[0,y,k[1]]],k[2]]}var
l=aR([0,kD,b],f),A=l[2],B=l[1],n=az([0,kE,b],e),C=[0,A,n[2]];return[0,c(m[18],B,n[1]),C];case
4:var
I=e[1],t=aR([0,kH,b],f);return[0,t[1],[0,t[2],[4,I]]];default:var
D=K(e);if(K(f)===D){var
o=cb(b,f,e),E=o[1],q=az(b,o[2]);return[0,[0,E,q[1]],q[2]]}var
r=aR([0,kF,b],f),F=r[2],G=r[1],s=az([0,kG,b],e),H=[0,F,s[2]];return[0,c(m[18],G,s[1]),H]}case
4:return[0,0,g];default:var
u=aR(b,g),J=u[1],L=[0,u[2],[4,j[11]]],M=[0,p(b,kI,a(d[1],de)),0];return[0,c(m[18],J,M),L]}}function
bm(f,b){if(0===b[0]){var
e=b[1];if(2===e[0])if(3===e[1][0]){var
h=e[2];if(4===h[0]){var
k=b[2];if(c(j[1],h[1],j[11])){var
l=p(f,kK,a(d[1],a7)),i=bm(f,k);return[0,[0,l,i[1]],i[2]]}}}var
g=bm([0,kJ,f],b[2]);return[0,g[1],[0,e,g[2]]]}return[0,0,b]}function
cc(aW){var
f=a(w[1][6],kL),i=a(w[1][6],kM),k=a(w[1][6],kN),u=A(j[11]);function
l(aX){var
m=aX;for(;;){if(m){var
b=m[1];switch(b[0]){case
0:var
ak=b[2],al=b[1],aY=m[2],aZ=b[4],a0=b[3],n=D(al[1]),am=v(E(al)),an=v(E(ak)),B=A(a0),R=A(aZ),ao=Q(bd(an,B),R),a1=aN(am,ao),a2=ak[3],a3=a(bk(kO),a2),a4=g[F],a5=I(a3),a6=[0,c(h[66][3],a5,a4),0],a7=[0,g[61],[0,g[F],0]],a9=[0,G(_),a7],a_=[0,a(h[66][22],a9),0],a$=[0,g[61],[0,g[F],0]],ba=[0,G(_),a$],be=[0,a(h[66][22],ba),0],bf=[0,l(aY),0],bg=[0,a(g[25],[0,n,0]),bf],bh=[0,a(g[75],[0,i,[0,k,[0,n,0]]]),bg],bl=a(e[10],n),bm=a(e[10],k),bn=[0,B,an,R,a(e[10],i),bm,bl],bo=[0,a(d[1],cS),bn],bp=[0,s([0,a(e[21],bo),0]),bh],bq=[0,a(g[25],[0,i,[0,k,0]]),bp],br=[0,a(h[66][22],bq),be],bs=$(B,u),bt=a(g[N],bs),bu=[0,c(h[66][21],bt,br),a_],bv=$(B,R),bw=[0,a(g[N],bv),0],bx=[0,a(g[25],[0,n,0]),bw],by=[0,a(g[75],[0,f,[0,n,0]]),bx],bz=a(e[10],n),bA=[0,am,ao,a(e[10],f),bz],bB=[0,a(d[1],cT),bA],bC=[0,s([0,a(e[21],bB),0]),by],bD=[0,a(g[25],[0,f,0]),bC],bE=a(h[66][22],bD),bF=[0,c(h[66][21],bE,bu),a6],bH=a(g[N],a1);return c(h[66][21],bH,bF);case
1:var
H=b[2],J=b[1],ap=c(j[26],J[4],H),bI=c(y[14],ap,H),bJ=c(y[13],J[4],bI),bK=J[3],bL=function(a){return c(j[9],a,H)},bO=c(j[43],bL,bK),aq=[0,J[1],0,bO,ap],bP=v(E(aq)),ar=A(H),T=A(bJ),bQ=aq[3],bR=a(bk(kP),bQ),bS=[0,g[61],[0,g[F],0]],bT=[0,G(_),bS],bU=[0,a(h[66][22],bT),0],bV=[0,g[61],[0,g[F],0]],bW=[0,G(_),bV],bX=[0,a(h[66][22],bW),0],bY=[0,g[41],0],bZ=[0,I(bR),bY],b0=[0,aD(f),bZ],b1=[0,a(g[25],[0,f,0]),b0],b2=[0,G(bc),b1],b3=[0,a(g[75],[0,i,[0,k,0]]),b2],b5=a(e[10],k),b6=[0,T,ar,bP,a(e[10],i),b5],b7=[0,a(d[1],cW),b6],b8=[0,s([0,a(e[21],b7),0]),b3],b9=[0,a(g[25],[0,k,[0,i,0]]),b8],b_=[0,a(h[66][22],b9),bX],b$=$(ar,T),cb=a(g[N],b$),cc=[0,c(h[66][21],cb,b_),bU],cd=$(T,u),ce=a(g[N],cd);return c(h[66][21],ce,cc);case
3:var
as=m[2],at=b[2],K=b[1],q=D(K[1]),cf=function(a){return c(j[9],a,at)},U=c(j[44],cf,K),V=v(E(K)),W=v(E(U)),L=A(at),au=aN(V,bd(W,L));if(2===K[2]){var
cg=U[3],ch=a(bj(kQ),cg),ci=g[F],cj=I(ch),ck=[0,c(h[66][3],cj,ci),0],cl=[0,l(as),0],cm=[0,a(g[25],[0,q,0]),cl],cn=[0,a(g[75],[0,i,[0,q,0]]),cm],co=a(e[10],q),cp=[0,V,W,L,a(e[10],i),co],cq=[0,a(d[1],c8),cp],cr=[0,s([0,a(e[21],cq),0]),cn],cs=[0,a(g[25],[0,i,0]),cr],ct=[0,a(h[66][22],cs),ck],cu=a(g[N],au);return c(h[66][21],cu,ct)}var
cw=U[3],cx=a(bj(kR),cw),cy=g[F],cz=I(cx),cA=[0,c(h[66][3],cz,cy),0],cB=[0,g[61],[0,g[F],0]],cC=[0,G(_),cB],cD=[0,a(h[66][22],cC),0],cE=[0,l(as),0],cF=[0,a(g[25],[0,q,0]),cE],cG=[0,a(g[75],[0,i,[0,k,[0,q,0]]]),cF],cH=a(e[10],q),cI=a(e[10],i),cJ=[0,V,W,L,a(e[10],k),cI,cH],cK=[0,a(d[1],cV),cJ],cL=[0,s([0,a(e[21],cK),0]),cG],cM=[0,a(g[25],[0,k,[0,i,0]]),cL],cN=[0,a(h[66][22],cM),cD],cO=$(L,u),cP=a(g[N],cO),cQ=[0,c(h[66][21],cP,cN),cA],cR=a(g[N],au);return c(h[66][21],cR,cQ);case
4:var
av=m[2],aw=b[3],x=aw[2],M=aw[1],ax=b[2],t=ax[2],X=ax[1],c2=b[1],Y=S(0);Z(Y,c2);var
ay=D(t[1]),az=D(x[1]),aA=v(E(t)),aB=v(E(x));if(c(j[1],X,j[12]))if(0===x[2]){switch(t[2]){case
0:var
ab=a(d[1],cX);break;case
1:var
ab=a(d[1],cY);break;default:var
ab=a(d[1],c_)}var
c3=A(M),c4=2===t[2]?kS:kT,c5=bi(c4,t[3],M,x[3]),c6=[0,l(av),0],c$=[0,a(g[25],[0,Y,0]),c6],da=[0,I(c5),c$],db=a(e[10],az),dc=[0,ab,[0,aA,aB,c3,a(e[10],ay),db]],dd=[0,s([0,a(e[21],dc),0]),da];return a(h[66][22],dd)}var
aC=A(X),aE=A(M),de=en(kU,X,t[3],M,x[3]),df=[0,g[61],[0,g[F],0]],dg=[0,G(_),df],dh=[0,a(h[66][22],dg),0],di=[0,g[61],[0,g[F],0]],dj=[0,G(_),di],dk=[0,a(h[66][22],dj),0],dl=[0,l(av),0],dm=[0,a(g[25],[0,Y,0]),dl],dn=[0,I(de),dm],dp=[0,a(g[75],[0,i,[0,k,0]]),dn],dq=a(e[10],az),dr=a(e[10],ay),ds=a(e[10],k),dt=[0,aA,aB,aC,aE,a(e[10],i),ds,dr,dq],du=[0,a(d[1],cZ),dt],dv=[0,s([0,a(e[21],du),0]),dp],dw=[0,a(g[25],[0,k,[0,i,0]]),dv],dx=[0,a(h[66][22],dw),dk],dy=$(aE,u),dz=a(g[N],dy),dA=[0,c(h[66][21],dz,dx),dh],dB=$(aC,u),dC=a(g[N],dB);return c(h[66][21],dC,dA);case
5:var
z=b[1],aF=z[5],aG=z[4],ac=z[3],aH=z[2],dD=m[2],dE=z[1],aI=S(0),dF=D(ac[1]);Z(aI,dE[1]);var
ad=v(E(aH)),dG=v(E(ac)),ae=bG(aF),dH=aN(a(e[9],1),ad),dI=[0,[0,ae],a(d[1],ah),dH],dJ=a(e[19],dI),dK=[0,a(d[1],ah),dJ],dL=[0,a(d[1],ea),dK],dM=a(e[21],dL),dN=A(aG),dO=bi(ep,ac[3],aG,[0,[0,j[14],aF],aH[3]]),dP=[0,p([0,kY,[0,kX,[0,kW,ep]]],kV,a(d[1],a8)),dO],dQ=g[F],dR=cv(ad),dS=[0,c(h[66][3],dR,dQ),0],dT=[0,l(dD),0],dU=[0,a(g[25],[0,aI,0]),dT],dV=[0,a(g[75],[0,f,0]),dU],dW=[0,I(dP),dV],dX=a(e[10],f),dY=a(e[10],dF),dZ=[0,a(e[10],ae),dG,ad,dN,dY,dX],d0=[0,a(d[1],c1),dZ],d1=[0,s([0,a(e[21],d0),0]),dW],d2=[0,a(g[25],[0,ae,[0,f,0]]),d1],d3=[0,a(g[75],[0,f,0]),d2],d4=[0,af(f),d3],d5=[0,a(g[25],[0,f,0]),d4],d6=[0,a(h[66][22],d5),dS],d7=a(g[N],dM);return c(h[66][21],d7,d6);case
6:var
aJ=m[2],d8=b[1];try{var
d9=l(aJ),d_=D(d8[1]),d$=c(w[1][13][3],d_,aW),eb=c(h[66][3],d$,d9);return eb}catch(a){a=r(a);if(a===C){var
m=aJ;continue}throw a}case
9:var
aK=b[2],ag=b[1],ec=E(ag),ed=E(aK),ee=ca(kZ,ag[3]),ef=a(d[1],bN),eg=a(d[1],bN),eh=[0,a(d[1],bM),eg,ef],ei=[0,a(d[1],bb),eh],ej=a(e[21],ei),ek=[0,g[41],[0,g[F],0]],el=[0,a(k0[1],ej),0],em=[0,g[61],[0,g[16],el]],eq=[0,G(b4),em],er=a(h[66][22],eq),es=c(h[66][21],er,ek),et=D(aK[1]),eu=a(e[10],et),ev=D(ag[1]),ew=a(e[10],ev),ex=v(ed),ey=[0,v(ec),ex,ew,eu],ez=[0,a(d[1],cU),ey],eA=a(e[21],ez),eB=I(ee),eC=s([0,eA,0]),eD=c(h[66][3],eC,eB);return c(o[18],eD,es);case
10:var
ai=b[2],aj=b[1],eE=b[3],eF=E(ai),eG=E(aj),eH=D(ai[1]),eI=D(aj[1]),aL=eE?j[14]:j[12],eJ=bi(k1,ai[3],aL,aj[3]),eK=[0,g[F],0],eL=[0,aD(f),eK],eM=[0,a(g[25],[0,f,0]),eL],eN=[0,I(eJ),eM],eO=a(e[10],eI),eP=a(e[10],eH),eQ=A(aL),eR=v(eG),eS=[0,v(eF),eR,eQ,eP,eO],eT=[0,a(d[1],c7),eS],eU=[0,s([0,a(e[21],eT),0]),eN];return a(h[66][22],eU);case
11:var
O=b[2],eV=m[2],eW=b[3],eX=b[1],aM=S(0);Z(aM,eX);var
aO=D(O[1]),aP=D(eW),aQ=v(E(O)),aR=v(E(a(j[45],O))),eY=O[3],eZ=a(bj(k2),eY),e0=[0,p(k4,k3,a(d[1],a8)),eZ],e1=g[F],e2=I(e0),e3=[0,c(h[66][3],e2,e1),0],e4=[0,l(eV),0],e5=[0,a(g[25],[0,aM,0]),e4],e6=[0,a(g[75],[0,aO,[0,aP,[0,f,0]]]),e5],e7=a(e[10],f),e8=a(e[10],aP),e9=[0,aQ,aR,a(e[10],aO),e8,e7],e_=[0,a(d[1],c0),e9],e$=[0,s([0,a(e[21],e_),0]),e6],fa=[0,a(g[25],[0,f,0]),e$],fb=[0,a(h[66][22],fa),e3],fc=aN(aQ,aa(aR)),fd=a(g[N],fc);return c(h[66][21],fd,fb);case
12:var
fe=k5[15],ff=D(b[1]),fg=s([0,a(e[10],ff),0]);return c(h[66][3],fg,fe);case
13:var
fh=g[F],fi=aD(D(b[1]));return c(h[66][3],fi,fh);case
14:var
fj=b[1],fk=[0,g[F],0],fl=[0,aD(f),fk],fm=[0,a(g[25],[0,f,0]),fl],fn=[0,G(bc),fm],fo=[0,g[61],fn],fp=[0,G(b4),fo],fq=D(fj),fr=[0,s([0,a(e[10],fq),0]),fp];return a(h[66][22],fr);case
15:var
aS=b[3],aT=b[2],P=b[1],fs=aS[2],ft=aS[1],fu=aT[2],fv=aT[1],aU=S(0),aV=S(0);Z(aU,fv);Z(aV,ft);var
fw=D(P[1]),fx=P[3],fy=a(eo(k6),fx),fz=P[3],fA=a(bk(k7),fz),fB=v(E(P)),fC=[0,l(fs),0],fD=[0,a(g[25],[0,aV,0]),fC],fE=[0,I(fA),fD],fF=[0,a(h[66][22],fE),0],fG=[0,l(fu),0],fH=[0,a(g[25],[0,aU,0]),fG],fI=[0,I(fy),fH],fJ=[0,a(h[66][22],fI),fF],fK=[0,fB,[0,a(e[10],fw),0]],fL=[0,a(d[1],c9),fK],fM=a(e[34],fL),fN=a(g[99],fM);return c(h[66][21],fN,fJ)}}return a(o[16],0)}}return l}function
eq(g,a,f){var
b=U(g,a,f),h=b[1],d=az(a,b[2]),i=d[1],e=bm(a,d[2]),j=e[2],k=c(m[18],i,e[1]);return[0,c(m[18],h,k),j]}function
ak(u,f,t,r,q,p,o,n,d){var
i=d[2],j=d[1],k=eq(u,[0,[0,q],k8],p),l=k[1],v=k[2],w=a(g[75],[0,f,0]),x=a(h[66][24],w),y=[0,r,[0,o,n,a(e[10],f)]],z=s([0,a(e[21],y),0]),A=c(h[66][3],z,x);if(a(m[17][48],l))return[0,j,i];var
b=S(0),B=[0,a(ej(b,t),v),i],C=[0,a(g[25],[0,b,0]),0],D=[0,A,[0,I(l),C]];return[0,[0,[0,b,a(h[66][22],D)],j],B]}function
er(U,g,e,D){var
h=D[1],V=D[2];if(x.caml_string_equal(a(aq[3],h),k9))return e;try{var
f=aj(g,V);if(typeof
f==="number")var
c=0;else
if(1===f[0]){var
m=f[1];if(typeof
m==="number")if(16<=m){switch(m+by|0){case
0:var
n=f[2];if(n){var
o=n[2];if(o){var
p=o[2];if(p)if(p[2])var
c=0,b=0;else{var
F=p[1],G=o[1],l=av(U,g,n[1]);if(typeof
l==="number")var
k=0;else
if(1===l[0]){var
I=l[1];if(typeof
I==="number")if(23===I)if(l[2])var
k=0;else
var
H=1,k=1;else
var
k=0;else
var
k=0}else
var
k=0;if(!k)var
H=0;if(H)var
W=Q(G,aa(F)),i=ak(g,h,0,a(d[1],dk),2,W,G,F,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0}else
var
c=0,b=0}else
var
c=0,b=0;break;case
2:var
q=f[2];if(q){var
s=q[2];if(s)if(s[2])var
c=0,b=0;else
var
J=s[1],K=q[1],X=Q(K,aa(J)),i=ak(g,h,2,a(d[1],dl),1,X,K,J,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0;break;case
3:var
t=f[2];if(t){var
u=t[2];if(u)if(u[2])var
c=0,b=0;else
var
L=u[1],M=t[1],Y=Q(L,aa(M)),i=ak(g,h,1,a(d[1],dq),2,Y,M,L,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0;break;case
4:var
v=f[2];if(v){var
w=v[2];if(w)if(w[2])var
c=0,b=0;else
var
N=w[1],O=v[1],Z=aa(O),_=Q(Q(N,A(j[14])),Z),i=ak(g,h,1,a(d[1],dm),2,_,O,N,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0;break;case
5:var
y=f[2];if(y){var
z=y[2];if(z)if(z[2])var
c=0,b=0;else
var
P=z[1],R=y[1],$=Q(R,aa(P)),i=ak(g,h,1,a(d[1],dn),2,$,R,P,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0;break;case
6:var
B=f[2];if(B){var
C=B[2];if(C)if(C[2])var
c=0,b=0;else
var
S=C[1],T=B[1],ab=aa(S),ac=Q(Q(T,A(j[14])),ab),i=ak(g,h,1,a(d[1],dp),2,ac,T,S,e),b=1;else
var
c=0,b=0}else
var
c=0,b=0;break;default:var
c=0,b=0}if(b)var
E=i,c=1}else
var
c=0;else
var
c=0}else
var
c=0;if(!c)var
E=e;return E}catch(b){b=r(b);if(a(ad[5],b))return e;throw b}}function
al(b){var
d=a(g[22],b),e=a(g[75],[0,b,0]),f=a(h[66][24],e);return c(h[66][3],f,d)}function
k_(f){bI(0);var
t=a(B[42][14],f),u=c(B[42][1],er,f),i=l(m[17][15],u,k$,t),k=i[1],v=i[2],w=cy(0),x=[0,a(o[16],0),0];function
y(k,i){var
c=i[2],l=c[2],f=c[1],m=i[1],n=k[2],o=k[1];if(c[3]){var
b=S(0),p=aH(0);Z(b,p);var
q=j[11],r=aZ(f),s=[0,[0,p,1,[0,[0,j[12],r],0],q],n],t=[0,a(g[25],[0,l,[0,b,0]]),[0,o,0]],u=[0,a(g[75],[0,b,0]),t],v=[0,af(b),u],w=[0,a(g[25],[0,f,[0,b,0]]),v],x=[0,a(d[1],ds),[0,m,0]],y=a(e[34],x),z=[0,a(g[99],y),w];return[0,a(h[66][22],z),s]}var
A=[0,a(g[25],[0,f,[0,l,0]]),[0,o,0]],B=[0,a(d[1],dr),[0,m,0]],C=a(e[34],B),D=[0,a(g[99],C),A];return[0,a(h[66][22],D),n]}var
n=l(m[17][15],y,x,w),p=n[1],b=c(m[18],v,n[2]);if(aV[1])c(j[33],ar,b);if(aF[1])try{l(j[64],[0,aH,bD,ar],0,b);var
C=a(o[16],0);return C}catch(b){b=r(b);if(b===j[27]){var
z=a(j[39],0),q=l(j[65],0,0,z)[2];if(aE[1])c(j[36],ar,q);var
A=a(cc(k),q);return c(h[66][3],p,A)}throw b}try{var
s=c(j[68],[0,aH,bD,ar],b);if(aE[1])c(j[36],ar,s);var
E=a(cc(k),s),F=c(h[66][3],p,E);return F}catch(b){b=r(b);if(b===j[28]){var
D=a(T[3],la);return c(h[66][5],0,D)}throw b}}var
es=a(o[67][9],k_);function
lb(b){var
f=b7[80];function
k(a){return c(f,0,a)}var
R=c(B[42][1],k,b);function
i(k,I){function
b(t){try{var
m=aP(t,I);if(typeof
m==="number")var
f=0;else
if(1===m[0]){var
u=m[1];if(typeof
u==="number")if(12<=u)var
f=0;else{switch(u){case
6:var
v=m[2];if(v){var
w=v[2];if(w)if(w[2])var
f=0,b=0;else
var
x=w[1],y=v[1],P=[0,i([0,lc,k],x),0],R=[0,i([0,ld,k],y),P],T=[0,a(d[1],cE),[0,y,[0,x,0]]],U=ab(x),V=[0,aw(k,Q(ab(y),U),T),R],q=a(h[66][22],V),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
7:var
z=m[2];if(z){var
B=z[2];if(B)if(B[2])var
f=0,b=0;else
var
C=B[1],D=z[1],W=[0,i([0,le,k],C),0],X=[0,i([0,lf,k],D),W],Y=[0,a(d[1],cF),[0,D,[0,C,0]]],Z=ab(C),_=[0,aw(k,bd(ab(D),Z),Y),X],q=a(h[66][22],_),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
8:var
E=m[2];if(E){var
F=E[2];if(F)if(F[2])var
f=0,b=0;else
var
n=F[1],p=E[1],s=S(0),$=[0,a(d[1],bX),[0,n,p]],aa=l([0,[0,s,a(e[21],$)],0]),ac=[0,p,[0,n,[0,a(e[10],s),0]]],ae=[0,a(d[1],cH),ac],af=aw(k,A(j[11]),ae),ag=[0,c(h[66][3],af,aa),0],ah=[0,i([0,lg,k],n),0],ai=[0,i([0,lh,k],p),ah],aj=[0,a(d[1],bW),[0,n,p]],ak=[0,l([0,[0,s,a(e[21],aj)],0]),ai],al=[0,p,[0,n,[0,a(e[10],s),0]]],am=[0,a(d[1],cG),al],an=ab(n),ao=[0,aw(k,ef(ab(p),an),am),ak],ap=[0,a(h[66][22],ao),ag],aq=a(g[25],[0,s,0]),ar=[0,a(d[1],dL),[0,n,[0,p,0]]],as=a(e[34],ar),at=a(g[99],as),au=c(h[66][3],at,aq),q=c(h[66][21],au,ap),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
9:var
G=m[2];if(G)if(G[2])var
f=0,b=0;else
var
L=G[1],av=[0,a(d[1],b0)],ax=[0,a(d[1],bZ),av],ay=[0,L,a(e[21],ax)],az=[0,a(d[1],bY),ay],M=a(e[21],az),aA=i(k,M),aB=em([0,li,k],M,[0,a(d[1],dK),[0,L,0]]),q=c(h[66][3],aB,aA),b=1;else
var
f=0,b=0;break;case
10:var
H=m[2];if(H)if(H[2])var
f=0,b=0;else
var
aC=H[1],N=function(i){try{var
d=aP(t,i);if(typeof
d==="number")var
b=0;else
if(1===d[0]){var
e=d[1];if(typeof
e==="number"){if(10===e){var
f=d[2];if(f)if(f[2])var
b=0,c=0;else
var
h=N(f[1]),c=1;else
var
b=0,c=0}else
if(11===e)if(d[2])var
b=0,c=0;else
var
h=1,c=1;else
var
b=0,c=0;if(c)var
g=h,b=1}else
var
b=0}else
var
b=0;if(!b)var
g=0;return g}catch(b){b=r(b);if(a(ad[5],b))return 0;throw b}},O=function(f,j){try{var
g=aP(t,j);if(typeof
g==="number")var
b=0;else
if(1===g[0]){var
n=g[1];if(typeof
n==="number")if(10===n){var
k=g[2];if(k)if(k[2])var
b=0;else
var
l=k[1],o=O([0,lj,f],l),p=[0,a(d[1],cI),[0,l,0]],q=[0,ab(l)],s=[0,a(d[1],a5),q],u=aw(f,a(e[21],s),p),m=c(h[66][3],u,o),b=1;else
var
b=0}else
var
b=0;else
var
b=0}else
var
b=0;if(!b)var
m=i(f,j);return m}catch(b){b=r(b);if(a(ad[5],b))return i(f,j);throw b}},aD=N(aC)?J(k):O(k,I),q=aD,b=1;else
var
f=0,b=0;break;case
11:if(m[2])var
f=0,b=0;else
var
q=J(k),b=1;break;default:var
f=0,b=0}if(b)var
K=q,f=1}else
var
f=0}else
var
f=0;if(!f)var
K=a(o[16],0);return K}catch(b){b=r(b);if(a(ad[5],b))return a(o[16],0);throw b}}return c(o[72][1],o[55],b)}function
l(b){if(b){var
j=b[2],f=b[1],g=f[1],S=f[2],k=function(T){try{var
k=aj(T,S);if(typeof
k==="number")var
f=0;else
if(1===k[0]){var
n=k[1];if(typeof
n==="number")if(16<=n){switch(n+by|0){case
0:var
o=k[2];if(o){var
p=o[2];if(p){var
q=p[2];if(q)if(q[2])var
f=0,b=0;else{var
E=q[1],F=p[1],U=o[1];if(c(R,U,a(d[1],a$)))var
V=[0,l(j),0],W=[0,al(g),V],X=[0,i(lk,E),W],Y=[0,i(ll,F),X],Z=[0,F,E,a(e[10],g)],_=[0,a(d[1],cO),Z],$=[0,s([0,a(e[21],_),0]),Y],G=a(h[66][22],$);else
var
G=l(j);var
m=G,b=1}else
var
f=0,b=0}else
var
f=0,b=0}else
var
f=0,b=0;break;case
1:var
t=k[2];if(t){var
u=t[2];if(u)if(u[2])var
f=0,b=0;else
var
H=u[1],I=t[1],aa=[0,l(j),0],ab=[0,al(g),aa],ac=[0,i(lm,H),ab],ae=[0,i(ln,I),ac],af=[0,I,H,a(e[10],g)],ag=[0,a(d[1],cN),af],ah=[0,s([0,a(e[21],ag),0]),ae],m=a(h[66][22],ah),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
15:var
v=k[2];if(v){var
w=v[2];if(w)if(w[2])var
f=0,b=0;else
var
J=w[1],K=v[1],ai=[0,l(j),0],ak=[0,al(g),ai],am=[0,i(lo,J),ak],an=[0,i(lp,K),am],ao=[0,K,J,a(e[10],g)],ap=[0,a(d[1],cJ),ao],aq=[0,s([0,a(e[21],ap),0]),an],m=a(h[66][22],aq),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
16:var
x=k[2];if(x){var
y=x[2];if(y)if(y[2])var
f=0,b=0;else
var
L=y[1],M=x[1],ar=[0,l(j),0],as=[0,al(g),ar],at=[0,i(lq,L),as],au=[0,i(lr,M),at],av=[0,M,L,a(e[10],g)],aw=[0,a(d[1],cK),av],ax=[0,s([0,a(e[21],aw),0]),au],m=a(h[66][22],ax),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
17:var
z=k[2];if(z){var
A=z[2];if(A)if(A[2])var
f=0,b=0;else
var
N=A[1],O=z[1],ay=[0,l(j),0],az=[0,al(g),ay],aA=[0,i(ls,N),az],aB=[0,i(lt,O),aA],aC=[0,O,N,a(e[10],g)],aD=[0,a(d[1],cL),aC],aE=[0,s([0,a(e[21],aD),0]),aB],m=a(h[66][22],aE),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;case
18:var
B=k[2];if(B){var
C=B[2];if(C)if(C[2])var
f=0,b=0;else
var
P=C[1],Q=B[1],aF=[0,l(j),0],aG=[0,al(g),aF],aH=[0,i(lu,P),aG],aI=[0,i(lv,Q),aH],aJ=[0,Q,P,a(e[10],g)],aK=[0,a(d[1],cM),aJ],aL=[0,s([0,a(e[21],aK),0]),aI],m=a(h[66][22],aL),b=1;else
var
f=0,b=0}else
var
f=0,b=0;break;default:var
f=0,b=0}if(b)var
D=m,f=1}else
var
f=0;else
var
f=0}else
var
f=0;if(!f)var
D=l(j);return D}catch(b){b=r(b);if(a(ad[5],b))return l(j);throw b}};return c(o[72][1],o[55],k)}return a(o[16],0)}var
n=a(B[42][14],b);return l(a(m[17][9],n))}var
et=a(o[67][9],lb);function
eu(a){if(typeof
a==="number")if(18<=a)switch(a+cf|0){case
0:return du;case
1:return dv;case
2:return dw;case
3:return dy;case
4:return dx;case
13:return dN;case
14:return dO;case
15:return dP;case
16:return dQ}throw C}function
ev(a){if(typeof
a==="number")if(18<=a)switch(a+cf|0){case
0:return dA;case
1:return dB;case
2:return dC;case
3:return dD;case
4:return dE;case
13:return dS;case
14:return dT;case
15:return dU;case
16:return dV}throw C}var
aA=[ao,lw,am(0)];function
L(g,f,J){var
c=aj(f,J);if(typeof
c!=="number")switch(c[0]){case
1:var
i=c[1];if(typeof
i==="number")if(16<=i)switch(i+by|0){case
0:var
j=c[2];if(j){var
k=j[2];if(k){var
l=k[2];if(l){if(!l[2]){var
x=l[1],y=k[1],h=av(g,f,j[1]);if(typeof
h!=="number"&&1===h[0]){var
m=h[1];if(typeof
m==="number")if(23===m){if(!h[2]){var
K=[0,a(d[1],dt),[0,y,x]];return a(e[21],K)}}else
if(24===m)if(!h[2]){var
M=[0,a(d[1],dM),[0,y,x]];return a(e[21],M)}}throw aA}var
b=1}else
var
b=0}else
var
b=1}else
var
b=1;break;case
9:var
p=c[2];if(p){var
q=p[2];if(q){if(!q[2]){var
z=q[1],A=p[1],S=L(g,f,z),T=[0,A,z,L(g,f,A),S],U=[0,a(d[1],dY),T];return a(e[21],U)}var
b=1}else
var
b=1}else
var
b=1;break;case
10:var
s=c[2];if(s){var
t=s[2];if(t){if(!t[2]){var
B=t[1],D=s[1],V=L(g,f,B),W=[0,D,B,L(g,f,D),V],X=[0,a(d[1],dX),W];return a(e[21],X)}var
b=1}else
var
b=1}else
var
b=1;break;case
11:if(!c[2])return a(d[1],d2);var
b=0;break;case
12:if(!c[2])return a(d[1],d4);var
b=0;break;case
13:var
u=c[2];if(u){if(!u[2]){var
E=u[1],Y=[0,E,L(g,f,E)],Z=[0,a(d[1],d1),Y];return a(e[21],Z)}var
b=0}else
var
b=1;break;case
14:var
v=c[2];if(v){var
w=v[2];if(w){if(!w[2]){var
F=w[1],G=v[1],_=L(g,f,F),$=[0,G,F,L(g,f,G),_],aa=[0,a(d[1],d0),$];return a(e[21],aa)}var
b=1}else
var
b=1}else
var
b=1;break;default:var
b=0}else
var
b=0;else
var
b=0;if(!b){var
n=c[2];if(n){var
o=n[2];if(o)if(!o[2]){var
N=o[1],O=n[1];try{var
P=eu(i),Q=[0,a(d[1],P),[0,O,N]],R=a(e[21],Q);return R}catch(a){a=r(a);if(a===C)throw aA;throw a}}}}break;case
2:var
H=c[2],I=c[1],ab=L(g,f,H),ac=[0,I,H,L(g,f,I),ab],ad=[0,a(d[1],dZ),ac];return a(e[21],ad)}throw aA}function
aS(d,c,b){var
e=a(o[67][4],b);return l(g[13],d,c,e)}function
M(b,e){function
d(f){var
d=aS(w[1][10][1],b,f),i=a(e,d),j=a(g[2],d);return c(h[66][3],j,i)}var
f=a(o[67][8],d),i=a(g[75],[0,b,0]),j=a(h[66][24],i);return c(h[66][3],j,f)}function
cd(b,i){function
d(d){var
j=c(aq[5],b,lx),e=aS(w[1][10][1],j,d),k=c(aq[5],b,ly),f=aS(w[1][10][1],k,d),l=[0,c(i,e,f),0],m=[0,a(g[2],f),l],n=[0,a(g[2],e),m];return a(h[66][22],n)}var
e=a(o[67][8],d),f=a(g[75],[0,b,0]),j=a(h[66][24],f);return c(h[66][3],j,e)}function
lz(j){var
aN=a(B[42][7],j),A=a(o[67][4],j),f=a(o[67][5],j);function
t(a){return L(A,f,a)}function
b(k){if(k){var
q=k[1];if(1===q[0]){var
m=k[2],n=q[3],p=q[1],v=q[2];if(aW[1]){var
x=function(s){try{var
f=av(A,s,n);if(typeof
f==="number")var
d=0;else
if(1===f[0]){var
k=f[1];if(typeof
k==="number")if(1<(k-23|0)>>>0)var
d=0;else
var
t=c(aq[5],p,lB),o=aS(w[1][10][1],t,j),q=be(n,a(e[10],p),v),u=b([0,[0,o,q],m]),x=l(g[139],[0,o],q,g[F]),i=c(h[66][3],x,u),d=1;else
var
d=0}else
var
d=0;if(!d)var
i=b(m);return i}catch(c){c=r(c);if(a(ad[5],c))return b(m);throw c}};return c(o[72][1],o[55],x)}}var
i=k[2],f=a(bn[2][1][1],q),u=function(v){try{var
o=aj(v,a(bn[2][1][3],q));if(typeof
o==="number")var
j=0;else
switch(o[0]){case
1:var
I=o[1];if(typeof
I==="number")if(18<=I){switch(I+cf|0){case
7:var
J=o[2];if(J){var
K=J[2];if(K)if(K[2])var
j=0,k=0;else
var
aP=K[1],aQ=J[1],aR=cd(f,function(c,a){return b([0,[0,c,aQ],[0,[0,a,aP],i]])}),aS=af(f),w=c(h[66][3],aS,aR),k=1;else
var
j=0,k=0}else
var
j=0,k=0;break;case
8:var
L=o[2];if(L){var
N=L[2];if(N)if(N[2])var
j=0,k=0;else
var
aT=N[1],aU=L[1],aV=0,aW=[0,M(f,function(a){return b([0,[0,a,aT],i])}),aV],aX=[0,M(f,function(a){return b([0,[0,a,aU],i])}),aW],aY=af(f),w=c(h[66][21],aY,aX),k=1;else
var
j=0,k=0}else
var
j=0,k=0;break;case
9:if(o[2])var
j=0,k=0;else
var
w=af(f),k=1;break;case
11:var
O=o[2];if(O)if(O[2])var
j=0,k=0;else{var
p=aj(v,O[1]);if(typeof
p==="number")var
m=0;else
switch(p[0]){case
1:var
B=p[1];if(typeof
B==="number")if(16<=B){switch(B+by|0){case
0:var
Q=p[2];if(Q){var
R=Q[2];if(R){var
S=R[2];if(S)if(S[2])var
m=0,n=0,l=0;else{var
D=S[1],E=R[1],aw=Q[1];if(aF[1]){var
T=av(A,v,aw);if(typeof
T==="number")var
y=0;else
if(1===T[0]){var
U=T[1];if(typeof
U==="number"){if(23===U)var
aZ=0,a0=[0,M(f,function(a){return b(i)}),aZ],a1=[0,E,D,a(e[10],f)],a2=[0,a(d[1],dz),a1],a3=a(e[21],a2),a4=[0,a(g[99],a3),a0],aB=a(h[66][22],a4),ap=1;else
if(24===U)var
a5=0,a6=[0,M(f,function(a){return b(i)}),a5],a7=[0,E,D,a(e[10],f)],a8=[0,a(d[1],dR),a7],a9=a(e[21],a8),a_=[0,a(g[99],a9),a6],aB=a(h[66][22],a_),ap=1;else
var
y=0,ap=0;if(ap)var
ax=aB,y=1}else
var
y=0}else
var
y=0;if(!y)var
ax=b(i);var
ay=ax}else{var
V=av(A,v,aw);if(typeof
V==="number")var
z=0;else
if(1===V[0]){var
W=V[1];if(typeof
W==="number"){if(23===W)var
a$=b(i),ba=[0,a(d[1],bT),[0,E,D]],bb=a(e[21],ba),bc=c(bn[2][1][5],bb,q),bd=a(g[6],bc),aD=c(h[66][3],bd,a$),aq=1;else
if(24===W)var
be=b(i),bg=[0,a(d[1],bS),[0,E,D]],bh=a(e[21],bg),bi=c(bn[2][1][5],bh,q),bj=a(g[6],bi),aD=c(h[66][3],bj,be),aq=1;else
var
z=0,aq=0;if(aq)var
aC=aD,z=1}else
var
z=0}else
var
z=0;if(!z)var
aC=b(i);var
ay=aC}var
x=ay,l=1}else
var
n=1,l=0}else
var
m=0,n=0,l=0}else
var
m=0,n=0,l=0;break;case
9:var
_=p[2];if(_){var
$=_[2];if($)if($[2])var
m=0,n=0,l=0;else
var
aG=$[1],aa=_[1],bu=t(aa),bv=0,bw=[0,M(f,function(a){var
c=Y(aG);return b([0,[0,a,bf(Y(aa),c)],i])}),bv],bx=[0,aa,aG,bu,a(e[10],f)],bz=[0,a(d[1],d6),bx],bA=[0,s([0,a(e[21],bz),0]),bw],x=a(h[66][22],bA),l=1;else
var
m=0,n=0,l=0}else
var
m=0,n=0,l=0;break;case
10:var
ab=p[2];if(ab){var
ac=ab[2];if(ac)if(ac[2])var
m=0,n=0,l=0;else
var
aH=ac[1],aI=ab[1],bB=0,bC=[0,M(f,function(a){var
c=Y(aH);return b([0,[0,a,aO(Y(aI),c)],i])}),bB],bD=[0,aI,aH,a(e[10],f)],bE=[0,a(d[1],d5),bD],bF=[0,s([0,a(e[21],bE),0]),bC],x=a(h[66][22],bF),l=1;else
var
m=0,n=0,l=0}else
var
m=0,n=0,l=0;break;case
13:var
ae=p[2];if(ae)if(ae[2])var
n=1,l=0;else
var
ag=ae[1],bG=t(ag),bH=0,bI=[0,M(f,function(a){return b([0,[0,a,ag],i])}),bH],bJ=[0,ag,bG,a(e[10],f)],bK=[0,a(d[1],d9),bJ],bL=[0,s([0,a(e[21],bK),0]),bI],x=a(h[66][22],bL),l=1;else
var
m=0,n=0,l=0;break;case
14:var
ah=p[2];if(ah){var
ai=ah[2];if(ai)if(ai[2])var
m=0,n=0,l=0;else
var
F=ai[1],G=ah[1],bM=t(G),bN=t(F),bO=0,bP=[0,M(f,function(a){var
c=aO(Y(G),F);return b([0,[0,a,bf(aO(G,Y(F)),c)],i])}),bO],bQ=[0,G,F,bM,bN,a(e[10],f)],bR=[0,a(d[1],d8),bQ],bU=[0,s([0,a(e[21],bR),0]),bP],x=a(h[66][22],bU),l=1;else
var
m=0,n=0,l=0}else
var
m=0,n=0,l=0;break;default:var
n=1,l=0}if(l)var
az=x,n=2}else
var
n=1;else
var
n=1;switch(n){case
0:var
u=0;break;case
1:var
X=p[2];if(X){var
Z=X[2];if(Z)if(Z[2])var
m=0,u=0;else{var
bk=Z[1],bl=X[1];try{var
bm=ev(B),bo=0,bp=[0,M(f,function(a){return b(i)}),bo],bq=[0,bl,bk,a(e[10],f)],br=[0,a(d[1],bm),bq],bs=[0,s([0,a(e[21],br),0]),bp],bt=a(h[66][22],bs),aE=bt}catch(a){a=r(a);if(a!==C)throw a;var
aE=b(i)}var
az=aE,u=1}else
var
m=0,u=0}else
var
m=0,u=0;break;default:var
u=1}if(u)var
P=az,m=1;break;case
2:var
aJ=p[2],ak=p[1],bV=t(ak),bW=0,bX=[0,M(f,function(a){return b([0,[0,a,aO(ak,Y(aJ))],i])}),bW],bY=[0,ak,aJ,bV,a(e[10],f)],bZ=[0,a(d[1],d7),bY],b0=[0,s([0,a(e[21],bZ),0]),bX],P=a(h[66][22],b0),m=1;break;default:var
m=0}if(!m)var
P=b(i);var
w=P,k=1}else
var
j=0,k=0;break;case
12:var
al=o[2];if(al){var
am=al[2];if(am)if(am[2])var
j=0,k=0;else
var
aK=am[1],aL=al[1],b1=cd(f,function(d,a){var
f=[0,[0,a,c(e[33],aK,aL)],i];return b([0,[0,d,c(e[33],aL,aK)],f])}),b2=af(f),w=c(h[66][3],b2,b1),k=1;else
var
j=0,k=0}else
var
j=0,k=0;break;case
0:case
1:case
2:case
3:case
4:var
as=o[2];if(as){var
at=as[2];if(at)if(at[2])var
j=0,k=0;else
var
au=b(i),k=2;else
var
j=0,k=0}else
var
j=0,k=0;break;default:var
j=0,k=0}switch(k){case
0:var
ar=0;break;case
1:var
au=w,ar=1;break;default:var
ar=1}if(ar)var
H=au,j=1}else
var
j=0;else
var
j=0;break;case
2:var
an=o[2],ao=o[1],b3=a(aN,an);if(c(lA[e0],v,b3))var
b4=t(ao),b5=0,b6=[0,M(f,function(a){return b([0,[0,a,bf(Y(ao),an)],i])}),b5],b7=[0,ao,an,b4,a(e[10],f)],b8=[0,a(d[1],d_),b7],b9=[0,s([0,a(e[21],b8),0]),b6],aM=a(h[66][22],b9);else
var
aM=b(i);var
H=aM,j=1;break;default:var
j=0}if(!j)var
H=b(i);return H}catch(c){c=r(c);if(c===aA)return b(i);if(a(ad[5],c))return b(i);throw c}};return c(o[72][1],o[55],u)}return c(h[66][3],et,es)}return b(a(o[67][3],j))}var
bo=a(o[67][9],lz);function
lC(b){var
f=a(o[67][2],b),j=a(o[67][4],b),k=a(o[67][5],b);function
p(a){return L(j,k,a)}function
i(f){function
b(b){function
j(d){var
c=aj(b,f);return a(o[16],c)}function
k(b){if(typeof
b!=="number")switch(b[0]){case
1:var
l=b[1];if(typeof
l==="number"){var
m=l-27|0;if(!(2<m>>>0))switch(m){case
0:if(!b[2])return bo;break;case
1:break;default:var
n=b[2];if(n)if(!n[2]){var
x=g[16],y=G(bc),z=c(h[66][3],y,x);return c(h[66][3],z,bo)}}}break;case
2:var
A=i(b[2]);return c(h[66][3],g[16],A)}try{var
s=p(f),t=g[16],u=function(b){var
c=[0,a(d[1],d3),[0,f,s]];return b$(b,a(e[21],c))},v=a(o[67][8],u),w=c(h[66][3],v,t),k=w}catch(b){b=r(b);if(b===aA)var
q=a(d[1],b3),j=a(g[e0],q);else{if(!a(o[71][9],b))throw b;var
j=c(o[21],0,b)}var
k=j}return c(h[66][3],k,bo)}var
l=a(o[71][10],j);return c(o[72][1],l,k)}return c(o[72][1],o[55],b)}return i(f)}var
ew=a(o[67][9],lC);function
lD(b){a(as[3],lE);cB(0);return ew}var
lF=a(o[16],0),ce=[0,fT,j,d,af,aD,fV,aV,aE,aF,aW,aX,fW,ap,ag,cl,S,gg,cp,aH,bD,ct,ar,aZ,bG,cu,I,cv,s,gm,G,a0,cw,Z,go,D,cx,cA,cz,bI,cy,cB,cC,cD,aK,z,i,O,H,bJ,bK,bL,a1,a2,a3,ah,bM,bN,ai,aL,at,a4,a5,bO,bP,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,au,cP,cQ,bQ,bR,cR,cS,cT,cU,cV,cW,cX,cY,cZ,c0,c1,c2,a6,aM,c3,c4,c5,c6,c7,c8,c9,c_,c$,da,db,dc,dd,a7,de,df,dg,dh,di,a8,dj,dk,dl,dm,dn,dp,dq,dr,ds,dt,du,dv,dw,dx,dy,dz,dA,dB,dC,dD,dE,bS,bT,a9,a_,bU,bV,bW,dF,dG,bX,bY,dH,dI,dJ,a$,bZ,b0,dK,dL,dM,dN,dO,dP,dQ,dR,dS,dT,dU,dV,dW,dX,dY,dZ,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,d_,d$,ba,b1,b2,bb,ea,b3,eb,X,ec,ed,ee,b4,_,i0,i2,bc,i4,Q,bd,ef,be,aN,i5,$,aa,aO,bf,Y,i6,ab,A,aj,eg,av,aP,eh,bg,ei,b8,J,ac,K,v,ej,E,b9,b_,bh,el,aw,em,b$,p,ax,ay,en,bi,ca,aQ,bj,eo,bk,bl,U,cb,aR,az,bm,cc,eq,ak,er,al,es,et,eu,ev,aA,L,aS,M,cd,bo,ew,c(o[72][1],lF,lD)];bw(440,ce,"Omega_plugin.Coq_omega");a(lG[10],bp);function
aT(b){var
d=c(n[17],w[1][6],lH),e=a(w[5][4],d),f=a(w[6][4],b),g=c(w[13][2],[0,e],f),h=a(bq[4][12],g);return a(bq[13][22],h)}function
br(b){var
d=c(m[17][141],lI[33],b);function
e(b){if(bx(b,lJ)){if(bx(b,lK)){if(bx(b,lL)){if(bx(b,lM)){var
d=c(k[17],lN,b),e=a(T[3],d);return l(P[6],0,0,e)}return aT(lO)}return aT(lP)}return aT(lQ)}return aT(lR)}var
f=c(n[17],e,d),g=ce[265],i=a(h[66][22],f),j=a(h[66][32],i);return c(h[66][3],j,g)}var
lS=0,lU=[0,[0,lT,function(a){return br(0)}],lS];ez(bq[10][8],bp,lV,0,0,lU);var
lW=0,lZ=[0,[0,lY,function(a){return br(lX)}],lW];function
l0(a,b){return br(c(n[17],w[1][8],a))}var
l6=[0,[0,[0,l5,[0,l4,[1,[0,[5,a(l3[16],l2[7])]],l1,0]]],l0],lZ];ez(bq[10][8],bp,l7,0,0,l6);var
ex=[0,bp,aT,br];bw(446,ex,"Omega_plugin.G_omega");bw(447,[0,bB,ce,ex],"Omega_plugin");return}
