function(uO){"use strict";var
g5="QMicromega",cU=123,he=142,eh="i",ht="__varmap",hd="monoid",hs="__p",g4="__p%i",hr="__ff",hc=250,U="ZMicromega",ec=" * ",G="micromega",hb="buggy certificate",cZ='command "',hq="( )^2",b3="plugins/micromega/certificate.ml",gU="compare_num",eg="real_nonlinear_prover",h=246,g2=" [*] ",g3="__wit",cY=115,g1="Zero",g0=120,cX=113,ef="Lia",hp="scale_term : not implemented",eb=117,a3="RingMicromega",gZ='Unfortunately Coq isn\'t aware of the presence of any "csdp" executable in the path. \n\n',ho="parse_zop",d$="real nonlinear prover",hn="0",a4=248,ee="%a * %a",gT="__arith",b2="Reals",gR="<=",gS="QArith",cW=438,ed=" + ",w="Coq",ha="psatz_R",cT=112,g_="Csdp packages are provided by some OS distributions; binaries and source code can be downloaded from https://projects.coin-or.org/Csdp",g$="Bad logical fragment",d_="plugins/micromega/mfourier.ml",K="Tauto",hm="%a + %a",gY=" Cannot find witness",hl="the use of a specialized external tool called csdp. \n\n",g9="EnvRing",T="t",gX="PsatzZ",hk="Rdefinitions",gW="D",g7="linear prover",g8="Depth",hj="Timeout",gV=" Skipping what remains of this tactic: the complexity of the goal requires ",hh="psatz_Q",hi='" exited ',hf="psatz_Z",hg="Rpow_def",cV=114,gQ="%i",ea="pure_sos",g6=146,$="VarMap",B=uO.jsoo_runtime,z=B.caml_check_bound,ae=B.caml_equal,a2=B.caml_fresh_oo_id,Z=B.caml_int_compare,gO=B.caml_int_of_string,d8=B.caml_lessthan,uM=B.caml_list_of_js_array,gN=B.caml_ml_string_length,cR=B.caml_mul,c=B.caml_new_string,gP=B.caml_obj_tag,aw=B.caml_register_global,u=B.caml_wrap_exception;function
a(a,b){return a.length==1?a(b):B.caml_call_gen(a,[b])}function
b(a,b,c){return a.length==2?a(b,c):B.caml_call_gen(a,[b,c])}function
e(a,b,c,d){return a.length==3?a(b,c,d):B.caml_call_gen(a,[b,c,d])}function
Y(a,b,c,d,e){return a.length==4?a(b,c,d,e):B.caml_call_gen(a,[b,c,d,e])}function
S(a,b,c,d,e,f){return a.length==5?a(b,c,d,e,f):B.caml_call_gen(a,[b,c,d,e,f])}function
J(a,b,c,d,e,f,g){return a.length==6?a(b,c,d,e,f,g):B.caml_call_gen(a,[b,c,d,e,f,g])}function
d9(a,b,c,d,e,f,g,h){return a.length==7?a(b,c,d,e,f,g,h):B.caml_call_gen(a,[b,c,d,e,f,g,h])}function
cS(a,b,c,d,e,f,g,h,i){return a.length==8?a(b,c,d,e,f,g,h,i):B.caml_call_gen(a,[b,c,d,e,f,g,h,i])}function
uN(a,b,c,d,e,f,g,h,i,j,k,l){return a.length==11?a(b,c,d,e,f,g,h,i,j,k,l):B.caml_call_gen(a,[b,c,d,e,f,g,h,i,j,k,l])}var
r=B.caml_get_global_data(),b8=[0,0,0],dr=[0,0],cy=[0,0,0],fU=uM([[0,c(w),[0,c("Lists"),[0,c("List"),0]]],[0,c(U),0],[0,c(K),0],[0,c(a3),0],[0,c(g9),0],[0,c(w),[0,c(G),[0,c(U),0]]],[0,c(w),[0,c(G),[0,c("RMicromega"),0]]],[0,c(w),[0,c(G),[0,c(K),0]]],[0,c(w),[0,c(G),[0,c(a3),0]]],[0,c(w),[0,c(G),[0,c(g9),0]]],[0,c(w),[0,c(gS),[0,c("QArith_base"),0]]],[0,c(w),[0,c(b2),[0,c(hk),0]]],[0,c(w),[0,c(b2),[0,c(hg),0]]],[0,c("LRing_normalise"),0]]),ad=c("micromega_plugin"),j=r.Stdlib,d=r.Num,p=r.Stdlib__printf,m=r.Big_int,A=r.Unix,cj=r.Stdlib__marshal,dn=r.Stdlib__printexc,o=r.Stdlib__list,ao=r.Assert_failure,e0=r.Ratio,e4=r.Stdlib__set,H=r.Not_found,ba=r.Stdlib__hashtbl,ck=r.Stdlib__map,k=r.Util,aT=r.CErrors,ag=r.Option,fN=r.CamlinternalLazy,aV=r.Names,g=r.EConstr,gE=r.CAst,ac=r.Tactics,av=r.Tacmach,D=r.Tacticals,aZ=r.Pp,bY=r.Proofview,bU=r.Coqlib,dP=r.Goptions,t=r.Ltac_plugin,O=r.Genarg,d7=r.Stdarg,hu=c(hn),hv=[0,[12,118,[2,0,0]],c("v%s")],hw=[0,[11,c("1/("),[15,[12,41,0]]],c("1/(%a)")],hx=[0,[11,c("- ("),[15,[12,41,0]]],c("- (%a)")],hy=[0,[12,40,[15,[11,c(")+("),[15,[12,41,0]]]]],c("(%a)+(%a)")],hz=[0,[12,40,[15,[11,c(")-("),[15,[12,41,0]]]]],c("(%a)-(%a)")],hA=[0,[12,40,[15,[11,c(")*("),[15,[12,41,0]]]]],c("(%a)*(%a)")],hB=[0,[12,40,[15,[11,c(")/("),[15,[12,41,0]]]]],c("(%a)/(%a)")],hC=[0,[12,40,[15,[11,c(")^("),[4,3,0,0,[12,41,0]]]]],c("(%a)^(%i)")],hD=[0,[11,c("Aeq("),[4,3,0,0,[12,41,0]]],c("Aeq(%i)")],hE=[0,[11,c("Ale("),[4,3,0,0,[12,41,0]]],c("Ale(%i)")],hF=[0,[11,c("Alt("),[4,3,0,0,[12,41,0]]],c("Alt(%i)")],hG=[0,[11,c("eq("),[2,0,[12,41,0]]],c("eq(%s)")],hH=[0,[11,c("le("),[2,0,[12,41,0]]],c("le(%s)")],hI=[0,[11,c("lt("),[2,0,[12,41,0]]],c("lt(%s)")],hJ=[0,[12,40,[15,[11,c(")^2"),0]]],c("(%a)^2")],hK=[0,[11,c(hd),0],c(hd)],hL=[0,[15,[11,c(ec),[15,0]]],c(ee)],hM=[0,[15,[11,c(ed),[15,0]]],c(hm)],hN=[0,[15,[11,c(ec),[15,0]]],c(ee)],jc=[0,0],jn=[0,0,0],jo=[0,[0,0],0],i8=[0,0],i7=[0,0],i6=[0,0],iY=[0,[0,0]],iZ=[0,[0,0]],i0=[0,[0,0]],i1=[0,[0,0]],iU=[0,[0,0]],iV=[0,[0,0]],iW=[0,[0,0]],iX=[0,[0,0]],iA=[0,[0,0],0],iy=[0,0,0],ir=[0,1],is=[0,2],it=[0,3],il=[0,0],io=[0,0],im=[0,1],iq=[0,3],ip=[0,0],h2=[0,[1,0]],h3=[0,0,[0,0]],h4=[0,[0,0],0],h5=[0,0],h6=[0,[1,0]],h7=[0,[1,0]],h8=[0,0],h9=[0,[1,0]],h_=[0,[1,0]],h$=[0,[1,0]],ia=[0,0],ib=[0,[1,0]],ic=[0,0,0],id=[0,0,0],ie=[0,0],ig=[0,0,0],ih=[0,0],hY=[1,0],hX=[0,0],hP=[1,0],hQ=[1,0],hR=[0,0],hT=[0,0],hS=[0,0],iF=[0,0],iS=[0,0],ja=[0,0],je=[0,[0,0],0],jf=[0,0,0],jg=[0,[0,0],0],jh=[0,0,0],ji=[0,[0,0],0],jj=[0,0,0],jk=[0,0,0],jl=[0,0,0],jp=[0,[0,0],0],jq=[0,0,0],jr=[0,[0,0],0],js=[0,0,0],jt=[0,[0,0],0],ju=[0,0,0],jv=[0,0,0],jw=[0,0,0],jy=c(";"),jW=[0,[11,c(cZ),[2,0,[11,c(hi),[4,3,0,0,0]]]],c('command "%s" exited %i')],jV=[0,[11,c(cZ),[2,0,[11,c(hi),[2,0,0]]]],c('command "%s" exited %s')],jX=[0,[11,c(cZ),[2,0,[11,c('" killed '),[4,3,0,0,0]]]],c('command "%s" killed %i')],jY=[0,[11,c(cZ),[2,0,[11,c('" stopped '),[4,3,0,0,0]]]],c('command "%s" stopped %i')],jL=[0,c("plugins/micromega/mutils.ml"),191,7],jF=[0,0,0],kp=[0,[11,c(g1),0],c(g1)],kq=[0,[11,c("Hyp "),[4,3,0,0,0]],c("Hyp %i")],kr=[0,[11,c("Def "),[4,3,0,0,0]],c("Def %i")],ks=[0,[11,c("Cst "),[2,0,0]],c("Cst %s")],kt=[0,[11,c(hq),0],c(hq)],ku=[0,[11,c("P * "),[15,0]],c("P * %a")],kv=[0,[12,40,[15,[11,c(")/"),[2,0,0]]]],c("(%a)/%s")],kw=[0,[15,[11,c(ec),[15,0]]],c(ee)],kx=[0,[15,[11,c(ed),[15,0]]],c(hm)],ky=[0,[12,91,[15,[12,93,0]]],c("[%a]")],kz=[0,[12,46,0],c(".")],kA=[0,[4,3,0,0,[11,c(":= "),[15,[11,c(" ; "),[15,0]]]]],c("%i:= %a ; %a")],kB=[0,[4,3,0,0,[12,cU,[15,[11,c(gR),[15,[11,c(gR),[15,[12,125,[15,0]]]]]]]]],c("%i{%a<=%a<=%a}%a")],kK=[0,0],kJ=[0,0],kI=[0,0],kH=[0,0,[0,0]],kG=[0,0,[0,0]],kD=[0,c("plugins/micromega/polynomial.ml"),509,10],kn=[0,[15,[12,32,[2,0,[12,32,[2,0,0]]]]],c("%a %s %s")],kl=c(">="),kk=c("="),ke=c(gU),kf=c(gU),kg=[0,0],kd=[0,0],kb=[0,0],j$=[0,[2,0,[12,g0,[4,3,0,0,[11,c(ed),0]]]],c("%sx%i + ")],j4=[0,0],j3=[0,1],j1=[0,0],kO=[0,[12,72,[4,3,0,0,0]],c("H%i")],kP=[0,[11,c("E("),[4,3,0,0,[12,44,[15,[12,44,[15,[12,41,0]]]]]]],c("E(%i,%a,%a)")],kQ=[0,[11,c("A("),[15,[12,44,[15,[12,41,0]]]]],c("A(%a,%a)")],lC=[0,1],lD=[0,[0,0,0]],lz=c("merge_proof : pivot is not possible"),lA=[0,1],lB=[0,1],ly=[0,0],ls=[0,1],lt=[0,1],lu=[0,1],lv=[0,1],lw=[0,1],lx=[0,1],lo=[0,0],lp=[0,-1],lq=[0,[11,c("optimise Exception : "),[2,0,0]],c("optimise Exception : %s")],lm=[0,0,0],ld=[0,0],le=[0,0],lf=[0,0],lg=[0,0],lh=[0,0],li=[0,0],lj=[0,0],lk=[0,0],lc=[0,0],lb=c("bound_of_variable: impossible"),la=[0,0,0],k_=[0,0,0],k$=c("SystemContradiction"),k9=[0,0],k6=[0,0],k5=[0,0,0,0],k2=[0,0],k0=[0,0],k1=[0,0],k3=[0,c(d_),257,4],kY=[0,c(d_),209,9],kV=[0,1],kW=[0,0],kS=[0,c(d_),147,4],kL=[0,1],kN=c("Mfourier.SystemContradiction"),kU=c("Mfourier.TimeOut"),l4=c(hp),l5=c("scale term: not implemented"),l6=c(hp),l7=[0,0],l8=c("term_to_q_expr: not implemented"),mb=[0,0],mc=c("term_to_z_expr: not implemented"),mi=c("Cuts should already be compiled"),mJ=[0,0],mK=[0,1],mL=[0,0],mM=[0,1],mN=[0,c(b3),1098,1],mE=[0,c(b3),997,2],mF=[0,0],mG=[0,1],mH=[0,c(b3),1024,2],mB=[0,1],mC=[0,0,0],mD=c("Interval without proof"),mz=[0,0],mw=[0,1],mx=[0,-1],mt=[0,1],mu=[0,-1],mm=[0,1],mn=[0,c(b3),679,5],mo=[0,0],mk=c("proof_of_farkas : not enough hyps"),mh=[0,[0,0]],mg=c("id_of_hyp"),me=[0,0],mf=[0,1],ma=[0,0],l9=[0,1],l_=[0,0],l3=[0,c(b3),404,12],l0=c("cannot happen"),lT=c("make_certificate(1)"),lU=c("empty_certificate"),lR=[0,1],lQ=[0,0],lI=[0,0],lN=[0,[0,0],0],lO=[0,0,0],lV=c("Certificate.Strict"),mp=c("Certificate.FoundProof"),mW=[0,0,0],mU=[0,0,0],mS=[0,0,[0,5,0]],mV=[0,1,[0,4,[0,5,0]]],mT=[0,1,[0,6,[0,5,0]]],mQ=[0,1,[0,6,[0,5,0]]],mO=c("Persistent_cache.PHashtable(Key).InvalidTableFormat"),mP=c("Persistent_cache.PHashtable(Key).UnboundTable"),rH=[0,[12,68,0],c(gW)],rI=[0,[11,c("R["),[15,[12,44,[15,[12,93,0]]]]],c("R[%a,%a]")],rJ=[0,[11,c("C["),[15,[12,44,[15,[12,93,0]]]]],c("C[%a,%a]")],rK=c("]"),rL=c("["),rM=[0,[11,c("EP["),[15,[12,44,[15,[12,44,[15,[12,93,0]]]]]]],c("EP[%a,%a,%a]")],rV=c("abstract_wrt_formula"),s7=c(eg),s5=c(eg),s2=c(eg),sV=c(d$),sU=c(d$),sT=c(d$),sy=c(hb),sx=c(hb),sq=c("csdpcert"),sr=c(G),ss=c("plugins"),sh=c(gT),si=[0,0],sj=c(gY),sb=c(g$),sc=c(hj),sd=c(g_),se=c(gZ),sf=c(hl),sg=c(gV),r7=c(g3),r8=c(T),r9=[0,[0,c(w),[0,c(G),[0,c($),0]]],[0,[0,c($),0],0]],r_=c($),r$=c(ht),sa=c(hr),r3=c(gT),r4=[0,0],r5=c(gY),rX=c(g$),rY=c(hj),rZ=c(g_),r0=c(gZ),r1=c(hl),r2=c(gV),rT=c("bad old index"),rU=c("proof compaction error"),rR=[0,0],rO=c(g3),rP=c(ht),rQ=c(hr),rG=[0,[15,[12,47,[15,0]]],c("%a/%a")],rC=c(T),rD=[0,[0,c(w),[0,c(G),[0,c($),0]]],[0,[0,c($),0],0]],rE=c($),ry=c("Empty"),rz=[0,[0,c(w),[0,c(G),[0,c($),0]]],[0,[0,c($),0],0]],rA=c($),ru=c("Leaf"),rv=[0,[0,c(w),[0,c(G),[0,c($),0]]],[0,[0,c($),0],0]],rw=c($),rq=c("Node"),rr=[0,[0,c(w),[0,c(G),[0,c($),0]]],[0,[0,c($),0],0]],rs=c($),q9=[0,0,0],rp=[0,[11,c(hs),[4,3,0,0,0]],c(g4)],ro=[0,[11,c(hs),[4,3,0,0,0]],c(g4)],rn=[0,[11,c("__x"),[4,3,0,0,0]],c("__x%i")],rm=[0,c("plugins/micromega/coq_micromega.ml"),1230,11],rd=c("error : parse_arith(2)"),rb=c("parse_qexpr parse error"),q$=[0,0],qQ=c("get_rank"),qP=[1,c("Oups")],qN=c(ho),qL=c(ho),qC=[0,[12,48,0],c(hn)],qD=[0,[11,c("(In "),[15,[12,41,[12,37,[11,c("nat"),0]]]]],c("(In %a)%%nat")],qE=[0,[12,40,[15,[11,c("^2)"),0]]],c("(%a^2)")],qF=[0,[11,c("( "),[15,[11,c(g2),[15,[12,41,0]]]]],c("( %a [*] %a)")],qG=[0,[12,40,[15,[11,c(g2),[15,[12,41,0]]]]],c("(%a [*] %a)")],qH=[0,[12,40,[15,[11,c(" [+] "),[15,[12,41,0]]]]],c("(%a [+] %a)")],qI=[0,[12,40,[15,[12,41,[12,37,[11,c("positive"),0]]]]],c("(%a)%%positive")],qz=[0,[11,c("Pc "),[15,0]],c("Pc %a")],qA=[0,[11,c("Pinj("),[15,[12,44,[15,[12,41,0]]]]],c("Pinj(%a,%a)")],qB=[0,[11,c("PX("),[15,[12,44,[15,[12,44,[15,[12,41,0]]]]]]],c("PX(%a,%a,%a)")],qw=[0,[15,[11,c(" ,"),[15,0]]],c("%a ,%a")],qx=[0,[15,0],c("%a")],qy=[0,[2,0,[15,[2,0,0]]],c("%s%a%s")],qv=[0,[2,0,0],c("%s")],qu=[0,[4,3,0,0,0],c(gQ)],qt=[0,[4,3,0,0,0],c(gQ)],qo=c("Formula"),qp=[0,[0,c(w),[0,c(G),[0,c(a3),0]]],[0,[0,c(a3),0],0]],qq=c(a3),qk=c("Build_Formula"),ql=[0,[0,c(w),[0,c(G),[0,c(a3),0]]],[0,[0,c(a3),0],0]],qm=c(a3),qh=c("QWitness"),qi=[0,[0,c(w),[0,c(G),[0,c(g5),0]]],0],qj=c(g5),qe=c("BFormula"),qf=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],qg=c(U),qa=c("I"),qb=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],qc=c(U),p8=c("X"),p9=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],p_=c(U),p4=c("A"),p5=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],p6=c(U),p0=c("N"),p1=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],p2=c(U),pW=c(gW),pX=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],pY=c(U),pS=c("Cj"),pT=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],pU=c(U),pO=c("FF"),pP=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],pQ=c(U),pK=c("TT"),pL=[0,[0,c(w),[0,c(G),[0,c(K),0]]],[0,[0,c(K),0],0]],pM=c(U),pI=c(gX),pG=c("PsatzC"),pE=c("PsatzAdd"),pC=c("PsatzMulC"),pA=c("PsatzMulE"),py=c("PsatzSquare"),pw=c("PsatzIn"),pu=c("OpGt"),ps=c("OpGe"),pq=c("OpLt"),po=c("OpLe"),pm=c("OpNEq"),pk=c("OpEq"),pi=c("Pinj"),pg=c("Pc"),pe=c("PX"),pc=c("PEpow"),pa=c("PEsub"),o_=c("PEmul"),o8=c("PEopp"),o6=c("PEadd"),o4=c("PEc"),o2=c("PEX"),o1=c("Q2R"),o0=c("IZR"),oZ=c("pow"),oY=c("Rinv"),oX=c("Rmult"),oW=c("Ropp"),oV=c("Rminus"),oU=c("Rplus"),oS=c("Rlt"),oQ=c("Rle"),oO=c("Rge"),oM=c("Rgt"),oL=c("Qpower"),oK=c("Qmult"),oJ=c("Qopp"),oI=c("Qminus"),oH=c("Qplus"),oF=c("Qeq"),oD=c("Qlt"),oB=c("Qle"),oA=c("Z.pow"),oz=c("Z.mul"),oy=c("Z.opp"),ox=c("Z.sub"),ow=c("Z.add"),ov=c("eq"),ot=c("Z.lt"),or=c("Z.le"),op=c("Z.ge"),on=c("Z.gt"),ol=c("EnumProof"),oj=c("CutProof"),oh=c("RatProof"),of=c("DoneProof"),oe=c("ZArithProof"),od=c("R1"),oc=c("R0"),oa=c("COpp"),n_=c("CInv"),n8=c("CMult"),n6=c("CMinus"),n4=c("CPlus"),n2=c("CZ"),n0=c("CQ"),nY=c("C1"),nW=c("C0"),nV=c("Rcst"),nU=c("Qmake"),nT=c("R"),nS=c("Q"),nQ=c("Zneg"),nO=c("Zpos"),nM=c("Z0"),nL=c("Z"),nJ=c("xI"),nH=c("xO"),nF=c("xH"),nD=c("Npos"),nB=c("N0"),nz=c("S"),nx=c("O"),nw=c("list"),nu=c("nil"),ns=c("cons"),nr=c("False"),nq=c("True"),no=c("iff"),nn=c("not"),nm=c("or"),nl=c("and"),m6=[0,0,0],mX=c(""),mZ=[0,c(ef),[0,c("Enum"),0]],m0=c("Lia Enum"),m2=[0,c("Lra"),[0,c(g8),0]],m4=[0,c(ef),[0,c(g8),0]],m7=[0,c(w),[0,c("Logic"),[0,c("Decidable"),0]]],na=[0,[0,c(w),[0,c("Numbers"),[0,c("BinNums"),0]]],0],nb=[0,[0,c(w),[0,c(b2),[0,c(hk),0]]],[0,[0,c(w),[0,c(b2),[0,c(hg),0]]],[0,[0,c(w),[0,c(b2),[0,c("Raxioms"),0]]],[0,[0,c(w),[0,c(gS),[0,c("Qreals"),0]]],0]]]],nc=[0,[0,c(w),[0,c("ZArith"),[0,c("BinInt"),0]]],0],nf=c(U),ng=c(U),nh=c(U),ni=c(U),nj=c(U),nk=c(U),qr=c("Coq_micromega.M.ParseError"),rW=c("Coq_micromega.CsdpNotFound"),sl=c(".csdp.cache"),sm=c("csdp"),sB=c(".lia.cache"),sE=c(".nia.cache"),sH=c(".nra.cache"),sL=c(g7),sP=c(g7),sS=c("nra"),sW=c("lia"),sY=c("nlia"),s8=c(ea),s$=c(ea),tc=c(ea),tj=[0,c("myred"),0],tl=c("RED"),to=c(T),tp=c(hf),ts=c(T),tu=c(eh),tv=c(hf),tx=c(gX),tA=c(T),tB=c("xlia"),tD=c(ef),tG=c(T),tH=c("xnlia"),tJ=c("Nia"),tM=c(T),tN=c("xnra"),tP=c("NRA"),tS=c(T),tT=c("xnqa"),tV=c("NQA"),tY=c(T),tZ=c("sos_Z"),t1=c("Sos_Z"),t4=c(T),t5=c("sos_Q"),t7=c("Sos_Q"),t_=c(T),t$=c("sos_R"),ub=c("Sos_R"),ue=c(T),uf=c("lra_Q"),uh=c("LRA_Q"),uk=c(T),ul=c("lra_R"),un=c("LRA_R"),uq=c(T),ur=c(ha),uu=c(T),uw=c(eh),ux=c(ha),uz=c("PsatzR"),uC=c(T),uD=c(hh),uG=c(T),uI=c(eh),uJ=c(hh),uL=c("PsatzQ"),k8=r.CMap,lZ=r.CList,mR=r.End_of_file,sp=r.Coq_config,st=r.Envars,su=r.Stdlib__filename,rS=r.Failure,rj=r.Retyping,rk=r.Sorts,qS=r.Pfedit,qR=r.Invalid_argument,qJ=r.Reductionops,nd=r.UnivGen,sn=r.System,th=r.Mltop;function
aa(f,c){if(typeof
c==="number")return b(j[55],f,hu);else
switch(c[0]){case
0:var
m=a(d[40],c[1]);return b(j[55],f,m);case
1:return e(p[1],f,hv,c[1]);case
2:return Y(p[1],f,hw,aa,c[1]);case
3:return Y(p[1],f,hx,aa,c[1]);case
4:var
g=c[1];return J(p[1],f,hy,aa,g[1],aa,g[2]);case
5:var
h=c[1];return J(p[1],f,hz,aa,h[1],aa,h[2]);case
6:var
i=c[1];return J(p[1],f,hA,aa,i[1],aa,i[2]);case
7:var
k=c[1];return J(p[1],f,hB,aa,k[1],aa,k[2]);default:var
l=c[1];return S(p[1],f,hC,aa,l[1],l[2])}}function
bf(f,c){switch(c[0]){case
0:return e(p[1],f,hD,c[1]);case
1:return e(p[1],f,hE,c[1]);case
2:return e(p[1],f,hF,c[1]);case
3:var
g=a(d[40],c[1]);return e(p[1],f,hG,g);case
4:var
h=a(d[40],c[1]);return e(p[1],f,hH,h);case
5:var
i=a(d[40],c[1]);return e(p[1],f,hI,i);case
6:return Y(p[1],f,hJ,aa,c[1]);case
7:return b(p[1],f,hK);case
8:return J(p[1],f,hL,aa,c[1],bf,c[2]);case
9:return J(p[1],f,hM,bf,c[1],bf,c[2]);default:return J(p[1],f,hN,bf,c[1],bf,c[2])}}var
ei=[0,aa,bf];aw(596,ei,"Micromega_plugin.Sos_types");function
a5(a){return 0===a?1:0}function
a6(a,b){if(a){var
c=a[1];return[0,c,a6(a[2],b)]}return b}function
ej(a){switch(a){case
0:return 0;case
1:return 2;default:return 1}}function
c0(b,a){return b?[0,c0(b[1],a)]:a}var
hO=[0];function
ax(a){return typeof
a==="number"?hP:0===a[0]?[1,ax(a[1])]:[0,a[1]]}function
bg(b,a){if(typeof
b==="number")return typeof
a==="number"?hQ:0===a[0]?[1,ax(a[1])]:[0,a[1]];else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[1,ax(c)]:0===a[0]?[1,bs(c,a[1])]:[0,bg(c,a[1])]}var
d=b[1];return typeof
a==="number"?[0,d]:0===a[0]?[0,bg(d,a[1])]:[1,bg(d,a[1])]}}function
bs(b,a){if(typeof
b==="number")return typeof
a==="number"?hR:0===a[0]?[0,ax(a[1])]:[1,ax(a[1])];else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,ax(c)]:0===a[0]?[0,bs(c,a[1])]:[1,bs(c,a[1])]}var
d=b[1];return typeof
a==="number"?[1,ax(d)]:0===a[0]?[1,bs(d,a[1])]:[0,bg(d,a[1])]}}function
bt(a){return typeof
a==="number"?0:0===a[0]?[0,[1,a[1]]]:[0,bt(a[1])]}function
bu(a){return typeof
a==="number"?0===a?hS:1:[0,[0,a[1]]]}function
bv(a){return typeof
a==="number"?a:[0,[1,a[1]]]}function
ek(a){return typeof
a==="number"?0:0===a[0]?[0,[1,[1,a[1]]]]:[0,[1,bt(a[1])]]}function
bh(b,a){if(typeof
b==="number")return typeof
a==="number"?0:1;else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,[1,c]]:0===a[0]?bv(bh(c,a[1])):bu(bh(c,a[1]))}var
d=b[1];return typeof
a==="number"?[0,bt(d)]:0===a[0]?bu(bw(d,a[1])):bv(bh(d,a[1]))}}function
bw(b,a){if(typeof
b==="number")return 1;else{if(0===b[0]){var
c=b[1];return typeof
a==="number"?[0,bt(c)]:0===a[0]?bu(bw(c,a[1])):bv(bh(c,a[1]))}var
d=b[1];return typeof
a==="number"?ek(d):0===a[0]?bv(bw(d,a[1])):bu(bw(d,a[1]))}}function
c1(c,b){var
a=bh(c,b);return typeof
a==="number"?0:a[1]}function
c2(b,a){return typeof
b==="number"?a:0===b[0]?bg(a,[1,c2(b[1],a)]):[1,c2(b[1],a)]}function
bx(a){return typeof
a==="number"?hT:0===a[0]?[0,bx(a[1])]:[0,bx(a[1])]}function
el(h,g,f){var
c=h,b=g,a=f;for(;;)if(typeof
b==="number")return typeof
a==="number"?c:1;else{if(0===b[0]){var
d=b[1];if(typeof
a==="number")return 2;else{if(0===a[0]){var
b=d,a=a[1];continue}var
c=2,b=d,a=a[1];continue}}var
e=b[1];if(typeof
a==="number")return 2;else{if(0===a[0]){var
c=1,b=e,a=a[1];continue}var
b=e,a=a[1];continue}}}var
hU=0;function
em(a,b){return el(hU,a,b)}function
c3(j,i,h){var
c=j,b=i,a=h;for(;;){if(c){var
d=c[1];if(typeof
b==="number")return 0;else{if(0===b[0]){var
e=b[1];if(typeof
a==="number")return 0;else{if(0===a[0]){var
f=a[1];switch(em(e,f)){case
0:return b;case
1:var
c=d,a=b,b=c1(f,e);continue;default:var
c=d,b=c1(e,f);continue}}var
c=d,a=a[1];continue}}var
g=b[1];if(typeof
a==="number")return 0;else{if(0===a[0]){var
c=d,b=g;continue}return[1,c3(d,g,a[1])]}}}return 0}}function
hV(b,a){var
c=bx(a);return c3(c0(bx(b),c),b,a)}function
en(a){return a?ax(en(a[1])):0}var
v=[0,ax,bg,bs,bt,bu,bv,ek,bh,bw,c1,c2,bx,el,em,c3,hV,en],hW=[0,function(b){return b?[0,a(v[17],b[1])]:0}];function
b4(a,d,c){if(typeof
c==="number")return d;else{if(0===c[0]){var
e=b4(a,d,c[1]);return b(a,d,b(a,e,e))}var
f=b4(a,d,c[1]);return b(a,f,f)}}function
eo(e,d,c){var
b=e,a=d;for(;;){if(b){var
f=b[1];if(a){var
b=f,a=a[2];continue}return c}return a?a[1]:c}}function
bi(c,b){if(b){var
d=b[1],e=bi(c,b[2]);return[0,a(c,d),e]}return 0}function
c4(d,c,a){if(a){var
e=a[1];return b(d,e,c4(d,c,a[2]))}return c}function
c5(a){return typeof
a==="number"?0:0===a[0]?[0,[1,a[1]]]:[1,[1,a[1]]]}function
ep(b){return typeof
b==="number"?hX:0===b[0]?[0,[0,b[1]]]:[1,a(v[4],b[1])]}function
eq(b){return typeof
b==="number"?hY:0===b[0]?[0,a(v[4],b[1])]:[1,[0,b[1]]]}function
a7(c,b){if(typeof
c==="number")return typeof
b==="number"?0:0===b[0]?[1,[1,b[1]]]:[1,a(v[4],b[1])];else{if(0===c[0]){var
d=c[1];return typeof
b==="number"?[0,[1,d]]:0===b[0]?c5(a7(d,b[1])):ep(a7(d,b[1]))}var
e=c[1];return typeof
b==="number"?[0,a(v[4],e)]:0===b[0]?eq(a7(e,b[1])):c5(a7(e,b[1]))}}function
aQ(c,a){if(typeof
c==="number")return a;else{if(0===c[0]){var
d=c[1];return typeof
a==="number"?c:0===a[0]?[0,b(v[2],d,a[1])]:a7(d,a[1])}var
e=c[1];return typeof
a==="number"?c:0===a[0]?a7(a[1],e):[1,b(v[2],e,a[1])]}}function
a8(a){return typeof
a==="number"?0:0===a[0]?[1,a[1]]:[0,a[1]]}function
b5(b,a){return aQ(b,a8(a))}function
a9(c,a){if(typeof
c==="number")return 0;else{if(0===c[0]){var
d=c[1];return typeof
a==="number"?0:0===a[0]?[0,b(v[11],d,a[1])]:[1,b(v[11],d,a[1])]}var
e=c[1];return typeof
a==="number"?0:0===a[0]?[1,b(v[11],e,a[1])]:[0,b(v[11],e,a[1])]}}function
by(c,a){if(typeof
c==="number")return typeof
a==="number"?0:0===a[0]?1:2;else{if(0===c[0]){var
d=c[1];if(typeof
a!=="number"&&0===a[0])return b(v[14],d,a[1]);return 2}var
e=c[1];if(typeof
a!=="number"&&1===a[0])return ej(b(v[14],e,a[1]));return 1}}function
er(b,a){return 2<=by(b,a)?0:1}function
c6(b,a){return 1===by(b,a)?1:0}function
hZ(b,a){return 2<=by(b,a)?1:0}function
h0(b,a){return 1===by(b,a)?a:b}function
b6(a){if(typeof
a!=="number"&&1===a[0])return[0,a[1]];return a}function
h1(a){if(typeof
a!=="number"&&0===a[0])return[0,a[1]];return 0}function
a_(b,a){if(typeof
b==="number")return er(h2,a)?h3:h4;else{if(0===b[0]){var
e=a_(b[1],a),f=e[1],c=aQ(a9(h6,e[2]),h5);if(c6(c,a))return[0,a9(h7,f),c];var
i=b5(c,a);return[0,aQ(a9(h9,f),h8),i]}var
g=a_(b[1],a),h=g[1],d=a9(h_,g[2]);if(c6(d,a))return[0,a9(h$,h),d];var
j=b5(d,a);return[0,aQ(a9(ib,h),ia),j]}}function
es(b,a){if(typeof
b==="number")return ic;else{if(0===b[0]){var
c=b[1];if(typeof
a==="number")return id;else{if(0===a[0])return a_(c,a);var
d=a_(c,[0,a[1]]),e=d[2],f=d[1];if(typeof
e==="number")return[0,a8(f),0];var
l=aQ(a,e);return[0,a8(aQ(f,ie)),l]}}var
g=b[1];if(typeof
a==="number")return ig;else{if(0===a[0]){var
h=a_(g,a),i=h[2],j=h[1];if(typeof
i==="number")return[0,a8(j),0];var
m=b5(a,i);return[0,a8(aQ(j,ih)),m]}var
k=a_(g,[0,a[1]]),n=k[1];return[0,n,a8(k[2])]}}}function
ii(b,a){return es(b,a)[1]}var
q=[0,c5,ep,eq,a7,aQ,a8,b5,a9,by,er,c6,hZ,h0,b6,h1,a_,es,ii,function(c,a){if(typeof
c==="number")return b6(a);else{if(0===c[0]){var
d=c[1];return typeof
a==="number"?b6(c):0===a[0]?[0,b(v[16],d,a[1])]:[0,b(v[16],d,a[1])]}var
e=c[1];return typeof
a==="number"?b6(c):0===a[0]?[0,b(v[16],e,a[1])]:[0,b(v[16],e,a[1])]}}];function
aj(c,a){return 0===b(q[9],c,a)?1:0}function
ij(a){return[0,a]}function
ik(a){return[0,a]}function
c7(d,f,e){var
c=f,a=e;for(;;)switch(c[0]){case
0:var
g=c[1];return 0===a[0]?b(d,g,a[1]):0;case
1:var
h=c[2],i=c[1];if(1===a[0]){var
j=a[2];if(0===b(v[14],i,a[1])){var
c=h,a=j;continue}return 0}return 0;default:var
k=c[3],l=c[2],m=c[1];if(2===a[0]){var
n=a[3],o=a[1];if(0===b(v[14],l,a[2])){if(c7(d,m,o)){var
c=k,a=n;continue}return 0}return 0}return 0}}function
P(c,a){switch(a[0]){case
0:return a;case
1:var
d=a[2];return[1,b(v[2],c,a[1]),d];default:return[1,c,a]}}function
et(b,c){return typeof
b==="number"?c:0===b[0]?[1,[1,b[1]],c]:[1,a(v[4],b[1]),c]}function
E(f,e,a,d,c){switch(a[0]){case
0:return b(e,a[1],f)?P(0,c):[2,a,d,c];case
1:return[2,a,d,c];default:var
g=a[2],h=a[1];return c7(e,a[3],[0,f])?[2,h,b(v[2],g,d),c]:[2,a,d,c]}}function
eu(c,b,a){return[2,[0,b],a,[0,c]]}function
ev(b,a){return eu(b,a,0)}function
_(c,b){switch(b[0]){case
0:return[0,a(c,b[1])];case
1:var
d=b[1];return[1,d,_(c,b[2])];default:var
e=b[2],f=b[1],g=_(c,b[3]);return[2,_(c,f),e,g]}}function
aR(d,a,c){switch(a[0]){case
0:return[0,b(d,a[1],c)];case
1:var
e=a[1];return[1,e,aR(d,a[2],c)];default:var
f=a[2],g=a[1];return[2,g,f,aR(d,a[3],c)]}}function
bj(d,a,c){switch(a[0]){case
0:return[0,b(d,a[1],c)];case
1:var
e=a[1];return[1,e,bj(d,a[2],c)];default:var
f=a[2],g=a[1];return[2,g,f,bj(d,a[3],c)]}}function
bz(g,f,e,c,d){switch(d[0]){case
0:return P(c,aR(g,e,d[1]));case
1:var
i=d[2],m=d[1],h=b(q[4],m,c);return typeof
h==="number"?P(c,b(f,i,e)):0===h[0]?P(c,b(f,[1,h[1],i],e)):P(m,bz(g,f,e,h[1],i));default:var
j=d[3],k=d[2],l=d[1];return typeof
c==="number"?[2,l,k,b(f,j,e)]:0===c[0]?[2,l,k,bz(g,f,e,[1,c[1]],j)]:[2,l,k,bz(g,f,e,a(v[4],c[1]),j)]}}function
bA(h,g,f,e,c,d){switch(d[0]){case
0:var
o=d[1];return P(c,aR(h,_(g,e),o));case
1:var
j=d[2],n=d[1],i=b(q[4],n,c);return typeof
i==="number"?P(c,b(f,j,e)):0===i[0]?P(c,b(f,[1,i[1],j],e)):P(n,bA(h,g,f,e,i[1],j));default:var
k=d[3],l=d[2],m=d[1];return typeof
c==="number"?[2,m,l,b(f,k,e)]:0===c[0]?[2,m,l,bA(h,g,f,e,[1,c[1]],k)]:[2,m,l,bA(h,g,f,e,a(v[4],c[1]),k)]}}function
c8(f,g,j,d,e,c){switch(c[0]){case
0:return[2,d,e,c];case
1:var
k=c[2],h=c[1];return typeof
h==="number"?[2,d,e,k]:0===h[0]?[2,d,e,[1,[1,h[1]],k]]:[2,d,e,[1,a(v[4],h[1]),k]];default:var
l=c[3],m=c[2],n=c[1],i=b(q[4],m,e);return typeof
i==="number"?E(f,g,b(j,n,d),m,l):0===i[0]?E(f,g,b(j,[2,n,i[1],[0,f]],d),e,l):E(f,g,c8(f,g,j,d,i[1],n),m,l)}}function
c9(g,f,h,k,d,e,c){switch(c[0]){case
0:return[2,_(f,d),e,c];case
1:var
l=c[2],i=c[1];if(typeof
i==="number")return[2,_(f,d),e,l];else{if(0===i[0]){var
p=[1,[1,i[1]],l];return[2,_(f,d),e,p]}var
r=[1,a(v[4],i[1]),l];return[2,_(f,d),e,r]}default:var
m=c[3],n=c[2],o=c[1],j=b(q[4],n,e);return typeof
j==="number"?E(g,h,b(k,o,d),n,m):0===j[0]?E(g,h,b(k,[2,o,j[1],[0,g]],d),e,m):E(g,h,c9(g,f,h,k,d,j[1],o),n,m)}}function
M(c,e,d,f,g){switch(g[0]){case
0:return aR(e,f,g[1]);case
1:var
r=g[2],s=g[1];return bz(e,function(a,b){return M(c,e,d,a,b)},r,s,f);default:var
h=g[3],j=g[2],i=g[1];switch(f[0]){case
0:return[2,i,j,aR(e,h,f[1])];case
1:var
m=f[2],k=f[1];return typeof
k==="number"?[2,i,j,M(c,e,d,m,h)]:0===k[0]?[2,i,j,M(c,e,d,[1,[1,k[1]],m],h)]:[2,i,j,M(c,e,d,[1,a(v[4],k[1]),m],h)];default:var
n=f[3],o=f[2],p=f[1],l=b(q[4],o,j);if(typeof
l==="number"){var
t=M(c,e,d,n,h);return E(c,d,M(c,e,d,p,i),o,t)}else{if(0===l[0]){var
u=l[1],w=M(c,e,d,n,h);return E(c,d,M(c,e,d,[2,p,u,[0,c]],i),j,w)}var
x=l[1],y=M(c,e,d,n,h);return E(c,d,c8(c,d,function(a,b){return M(c,e,d,a,b)},i,x,p),o,y)}}}}function
x(d,f,g,c,e,h,i){switch(i[0]){case
0:return bj(g,h,i[1]);case
1:var
t=i[2],u=i[1];return bA(f,c,function(a,b){return x(d,f,g,c,e,a,b)},t,u,h);default:var
j=i[3],l=i[2],k=i[1];switch(h[0]){case
0:var
w=h[1],y=aR(f,_(c,j),w);return[2,_(c,k),l,y];case
1:var
o=h[2],m=h[1];if(typeof
m==="number"){var
z=x(d,f,g,c,e,o,j);return[2,_(c,k),l,z]}else{if(0===m[0]){var
A=x(d,f,g,c,e,[1,[1,m[1]],o],j);return[2,_(c,k),l,A]}var
B=x(d,f,g,c,e,[1,a(v[4],m[1]),o],j);return[2,_(c,k),l,B]}default:var
p=h[3],r=h[2],s=h[1],n=b(q[4],r,l);if(typeof
n==="number"){var
C=x(d,f,g,c,e,p,j);return E(d,e,x(d,f,g,c,e,s,k),r,C)}else{if(0===n[0]){var
D=n[1],F=x(d,f,g,c,e,p,j);return E(d,e,x(d,f,g,c,e,[2,s,D,[0,d]],k),l,F)}var
G=n[1],H=x(d,f,g,c,e,p,j);return E(d,e,c9(d,c,e,function(a,b){return x(d,f,g,c,e,a,b)},k,G,s),r,H)}}}}function
bB(f,e,d,a,c){switch(a[0]){case
0:return[0,b(e,a[1],c)];case
1:var
g=a[1];return P(g,bB(f,e,d,a[2],c));default:var
h=a[2],i=a[1],j=bB(f,e,d,a[3],c);return E(f,d,bB(f,e,d,i,c),h,j)}}function
bC(d,g,f,c,e,a){return b(c,a,d)?[0,d]:b(c,a,g)?e:bB(d,f,c,e,a)}function
ay(f,j,i,e,g,d,c,h){switch(h[0]){case
0:return P(c,bC(f,j,i,e,d,h[1]));case
1:var
l=h[2],p=h[1],k=b(q[4],p,c);return typeof
k==="number"?P(c,b(g,l,d)):0===k[0]?P(c,b(g,[1,k[1],l],d)):P(p,ay(f,j,i,e,g,d,k[1],l));default:var
m=h[3],n=h[2],o=h[1];if(typeof
c==="number"){var
r=b(g,m,d);return E(f,e,ay(f,j,i,e,g,d,0,o),n,r)}else{if(0===c[0]){var
s=ay(f,j,i,e,g,d,[1,c[1]],m);return E(f,e,ay(f,j,i,e,g,d,c,o),n,s)}var
t=ay(f,j,i,e,g,d,a(v[4],c[1]),m);return E(f,e,ay(f,j,i,e,g,d,c,o),n,t)}}}function
V(b,e,f,d,c,g,h){switch(h[0]){case
0:return bC(b,e,d,c,g,h[1]);case
1:var
q=h[2],r=h[1];return ay(b,e,d,c,function(a,g){return V(b,e,f,d,c,a,g)},q,r,g);default:var
i=h[3],m=h[2],k=h[1];switch(g[0]){case
0:return bC(b,e,d,c,h,g[1]);case
1:var
l=g[2],j=g[1],s=typeof
j==="number"?V(b,e,f,d,c,l,i):0===j[0]?V(b,e,f,d,c,[1,[1,j[1]],l],i):V(b,e,f,d,c,[1,a(v[4],j[1]),l],i);return E(b,c,V(b,e,f,d,c,g,k),m,s);default:var
n=g[3],o=g[2],p=g[1],t=V(b,e,f,d,c,n,i),u=0,w=ay(b,e,d,c,function(a,g){return V(b,e,f,d,c,a,g)},i,u,p),x=V(b,e,f,d,c,P(0,n),k),y=V(b,e,f,d,c,p,k),z=E(b,c,w,o,t);return M(b,f,c,E(b,c,M(b,f,c,E(b,c,y,o,[0,b]),x),m,[0,b]),z)}}}function
bD(a,e,g,f,c,d){switch(d[0]){case
0:var
h=d[1];return[0,b(f,h,h)];case
1:var
l=d[1];return[1,l,bD(a,e,g,f,c,d[2])];default:var
i=d[3],j=d[2],k=d[1],m=V(a,e,g,f,c,k,P(0,bC(a,e,f,c,i,b(g,e,e)))),n=bD(a,e,g,f,c,i);return E(a,c,M(a,g,c,E(a,c,bD(a,e,g,f,c,k),j,[0,a]),m),j,n)}}function
ew(c,b,a){return et(a,ev(c,b))}function
bE(h,g,f,e,d,c,n,b,m){var
j=n,i=m;for(;;)if(typeof
i==="number")return a(c,V(h,g,f,e,d,j,b));else{if(0===i[0]){var
k=i[1];return a(c,V(h,g,f,e,d,bE(h,g,f,e,d,c,bE(h,g,f,e,d,c,j,b,k),b,k),b))}var
l=i[1],j=bE(h,g,f,e,d,c,j,b,l),i=l;continue}}function
ex(h,a,g,f,e,d,c,b){return b?bE(h,a,g,f,e,d,[0,a],c,b[1]):[0,a]}function
L(a,f,c,g,e,d,b,h){switch(h[0]){case
0:return[0,h[1]];case
1:return ew(a,f,h[1]);case
2:var
i=h[2],j=h[1];if(5===j[0]){var
m=L(a,f,c,g,e,d,b,j[1]);return x(a,c,e,d,b,L(a,f,c,g,e,d,b,i),m)}if(5===i[0]){var
l=L(a,f,c,g,e,d,b,i[1]);return x(a,c,e,d,b,L(a,f,c,g,e,d,b,j),l)}var
k=L(a,f,c,g,e,d,b,i);return M(a,c,b,L(a,f,c,g,e,d,b,j),k);case
3:var
n=h[1],o=L(a,f,c,g,e,d,b,h[2]);return x(a,c,e,d,b,L(a,f,c,g,e,d,b,n),o);case
4:var
p=h[1],q=L(a,f,c,g,e,d,b,h[2]);return V(a,f,c,g,b,L(a,f,c,g,e,d,b,p),q);case
5:return _(d,L(a,f,c,g,e,d,b,h[1]));default:var
r=h[2],s=L(a,f,c,g,e,d,b,h[1]);return ex(a,f,c,g,b,function(a){return a},s,r)}}function
az(c,b){if(typeof
b==="number")switch(b){case
0:return 0;case
1:return 1;default:return 2}else
switch(b[0]){case
0:return[0,a(c,b[1])];case
1:var
d=b[1],e=az(c,b[2]);return[1,az(c,d),e];case
2:var
f=b[1],g=az(c,b[2]);return[2,az(c,f),g];case
3:return[3,az(c,b[1])];default:var
h=b[1],i=az(c,b[2]);return[4,az(c,h),i]}}var
b7=0;function
b9(e,d,c,f){if(f){var
h=f[2],g=f[1],i=b(d,c,g);if(i){if(a(e,i[1]))return 0;var
j=b9(e,d,c,h);return j?[0,[0,g,j[1]]]:0}var
k=b9(e,d,c,h);return k?[0,[0,g,k[1]]]:0}var
l=b(d,c,c);return l?a(e,l[1])?0:[0,[0,c,0]]:[0,[0,c,0]]}function
ey(g,f,e,d){var
a=e,b=d;for(;;){if(a){var
h=a[2],c=b9(g,f,a[1],b);if(c){var
a=h,b=c[1];continue}return 0}return[0,b]}}function
ez(e,d,c,a){var
b=0;return c4(function(f,a){var
b=ey(e,d,c,f);return b?[0,b[1],a]:a},b,a)}function
bF(d,c,a,b){if(a){var
e=a[2],f=ez(d,c,a[1],b);return a6(bF(d,c,e,b),f)}return b7}function
ab(d,c,f,e,p,o){var
b=p,g=o;for(;;)if(typeof
g==="number")switch(g){case
0:return b?b7:b8;case
1:return b?b8:b7;default:return b8}else
switch(g[0]){case
0:var
h=g[1];return b?a(f,h):a(e,h);case
1:var
i=g[2],j=g[1];if(b){var
q=ab(d,c,f,e,b,i);return a6(ab(d,c,f,e,b,j),q)}var
r=ab(d,c,f,e,b,i);return bF(d,c,ab(d,c,f,e,b,j),r);case
2:var
k=g[2],l=g[1];if(b){var
s=ab(d,c,f,e,b,k);return bF(d,c,ab(d,c,f,e,b,l),s)}var
t=ab(d,c,f,e,b,k);return a6(ab(d,c,f,e,b,l),t);case
3:var
u=g[1],b=a5(b),g=u;continue;default:var
m=g[2],n=g[1];if(b){var
v=ab(d,c,f,e,b,m);return bF(d,c,ab(d,c,f,e,a5(b),n),v)}var
w=ab(d,c,f,e,b,m);return a6(ab(d,c,f,e,a5(b),n),w)}}function
eA(f,e,d){var
c=e,a=d;for(;;){if(c){var
g=c[2],h=c[1];if(a){var
i=a[2];if(b(f,h,a[1])){var
c=g,a=i;continue}return 0}return 0}return 1}}function
b_(g,f,e,d,c,b,a){return eA(c,ab(g,f,e,d,1,b),a)}function
c_(d,c,a){return a5(b(d,c,a))}function
c$(f,e,c,a){var
d=b(e,c,a);return d?c_(f,c,a):d}function
eB(b,a){switch(b){case
0:return il;case
1:return 1===a?im:0===a?io:0;case
2:return 1===a?0:[0,a];default:return 1===a?0:0===a?ip:iq}}function
eC(b,a){switch(b){case
0:return[0,a];case
1:return 0===a?ir:0;case
2:return 1===a?0:is;default:return 1===a?0:0===a?it:[0,a]}}function
b$(c,b){return b?a(c,b[1]):0}function
da(d,c,a){if(c){var
e=c[1];return a?b(d,e,a[1]):0}return 0}function
eD(g,f,e,d,c,b,a){var
h=a[1];return 0===a[2]?[0,[0,V(g,f,e,d,c,b,h),0]]:0}function
eE(g,f,e,d,c,b,a){var
h=b[1],i=a[1],j=eB(b[2],a[2]);return b$(function(a){return[0,[0,V(g,f,e,d,c,h,i),a]]},j)}function
bG(e,d,c,b,a){var
f=b[1],g=a[1],h=eC(b[2],a[2]);return b$(function(a){return[0,[0,M(e,d,c,f,g),a]]},h)}function
aS(a,f,d,e,c,h,g,b){if(typeof
b==="number")return[0,[0,[0,a],0]];else
switch(b[0]){case
0:return[0,eo(b[1],g,[0,[0,a],0])];case
1:return[0,[0,bD(a,f,d,e,c,b[1]),3]];case
2:var
j=b[1],k=aS(a,f,d,e,c,h,g,b[2]);return b$(function(b){return eD(a,f,d,e,c,j,b)},k);case
3:var
l=b[1],m=aS(a,f,d,e,c,h,g,b[2]),n=aS(a,f,d,e,c,h,g,l);return da(function(b,g){return eE(a,f,d,e,c,b,g)},n,m);case
4:var
o=b[1],p=aS(a,f,d,e,c,h,g,b[2]),q=aS(a,f,d,e,c,h,g,o);return da(function(b,e){return bG(a,d,c,b,e)},q,p);default:var
i=b[1];return c$(c,h,a,i)?[0,[0,[0,i],2]]:0}}function
bH(a,d,f,e){var
g=e[1],h=e[2];if(0===g[0]){var
c=g[1];switch(h){case
0:return c_(d,c,a);case
1:return b(d,c,a);case
2:return b(f,c,a);default:return c$(d,f,c,a)}}return 0}function
ca(c,i,h,g,b,a,f,e){var
d=aS(c,i,h,g,b,a,f,e);return d?bH(c,b,a,d[1]):0}function
eF(e,j,d,i,c,b,a,h){var
k=h[3],l=h[2],f=L(e,j,d,i,c,b,a,h[1]),g=L(e,j,d,i,c,b,a,k);switch(l){case
0:var
m=[0,[0,x(e,d,c,b,a,g,f),2],0];return[0,[0,x(e,d,c,b,a,f,g),2],m];case
1:return[0,[0,x(e,d,c,b,a,f,g),0],0];case
2:return[0,[0,x(e,d,c,b,a,f,g),2],0];case
3:return[0,[0,x(e,d,c,b,a,g,f),2],0];case
4:return[0,[0,x(e,d,c,b,a,f,g),3],0];default:return[0,[0,x(e,d,c,b,a,g,f),3],0]}}function
db(h,g,f,e,d,c,b,a){var
i=eF(h,g,f,e,d,c,b,a);return bi(function(a){return[0,a,0]},i)}function
eG(e,j,d,i,c,b,a,h){var
k=h[3],l=h[2],f=L(e,j,d,i,c,b,a,h[1]),g=L(e,j,d,i,c,b,a,k);switch(l){case
0:return[0,[0,x(e,d,c,b,a,f,g),0],0];case
1:var
m=[0,[0,x(e,d,c,b,a,g,f),2],0];return[0,[0,x(e,d,c,b,a,f,g),2],m];case
2:return[0,[0,x(e,d,c,b,a,g,f),3],0];case
3:return[0,[0,x(e,d,c,b,a,f,g),3],0];case
4:return[0,[0,x(e,d,c,b,a,g,f),2],0];default:return[0,[0,x(e,d,c,b,a,f,g),2],0]}}function
dc(h,g,f,e,d,c,b,a){var
i=eG(h,g,f,e,d,c,b,a);return bi(function(a){return[0,a,0]},i)}function
cb(f,e){var
d=f,c=e;for(;;)switch(c[0]){case
0:return[0,c[1]];case
1:var
g=c[2],d=b(v[2],c[1],d),c=g;continue;default:var
h=c[3],i=c[2],j=c[1],k=cb(a(v[1],d),h);return[2,[4,cb(d,j),[6,[1,d],[0,i]]],k]}}function
iu(a){return cb(0,a)}function
ak(c,b){switch(b[0]){case
0:return[0,a(c,b[1])];case
1:return[1,b[1]];case
2:var
d=b[1],e=ak(c,b[2]);return[2,ak(c,d),e];case
3:var
f=b[1],g=ak(c,b[2]);return[3,ak(c,f),g];case
4:var
h=b[1],i=ak(c,b[2]);return[4,ak(c,h),i];case
5:return[5,ak(c,b[1])];default:var
j=b[2];return[6,ak(c,b[1]),j]}}function
eH(b,a){var
c=a[2],d=a[1],e=ak(b,a[3]);return[0,ak(b,d),c,e]}function
iv(q,h,f,g,c){if(typeof
c!=="number")switch(c[0]){case
1:var
m=c[1];if(0===m[0]){var
n=m[1];return b(g,q,n)?0:[5,b(f,n,n)]}return[1,m];case
3:var
a=c[2],d=c[1];if(typeof
d==="number")return 0;else
switch(d[0]){case
3:var
i=d[2],j=d[1];if(typeof
j!=="number"&&5===j[0]){var
s=j[1];return typeof
a==="number"?0:5===a[0]?[3,[5,b(f,a[1],s)],i]:c}if(typeof
i!=="number"&&5===i[0]){var
r=i[1];return typeof
a==="number"?0:5===a[0]?[3,[5,b(f,a[1],r)],j]:c}return typeof
a==="number"?0:5===a[0]?b(g,h,a[1])?d:[3,d,a]:c;case
5:var
e=d[1];if(typeof
a==="number")return 0;else
switch(a[0]){case
3:var
k=a[2],l=a[1];if(typeof
l!=="number"&&5===l[0])return[3,[5,b(f,e,l[1])],k];if(typeof
k!=="number"&&5===k[0])return[3,[5,b(f,e,k[1])],l];return b(g,h,e)?a:[3,d,a];case
4:return[4,[3,[5,e],a[1]],[3,[5,e],a[2]]];case
5:return[5,b(f,e,a[1])];default:return b(g,h,e)?a:[3,d,a]}default:return typeof
a==="number"?0:5===a[0]?b(g,h,a[1])?d:[3,d,a]:c}case
4:var
o=c[2],p=c[1];return typeof
p==="number"?o:typeof
o==="number"?p:[4,p,o]}return c}function
iw(a){return a[1]}function
ix(a){return a[2]}function
al(c,a){var
d=b(q[8],a[1],[0,c[2]]);return aj(b(q[8],c[1],[0,a[2]]),d)}function
bI(c,a){var
d=b(q[8],a[1],[0,c[2]]),e=b(q[8],c[1],[0,a[2]]);return b(q[10],e,d)}function
am(c,a){var
d=b(v[11],c[2],a[2]),e=b(q[8],a[1],[0,c[2]]),f=b(q[8],c[1],[0,a[2]]);return[0,b(q[5],f,e),d]}function
aA(c,a){var
d=b(v[11],c[2],a[2]);return[0,b(q[8],c[1],a[1]),d]}function
a$(b){var
c=b[2];return[0,a(q[6],b[1]),c]}function
bk(b,a){return am(b,a$(a))}function
dd(b){var
a=b[1];return typeof
a==="number"?iy:0===a[0]?[0,[0,b[2]],a[1]]:[0,[1,b[2]],a[1]]}function
de(a,b){return b4(aA,a,b)}function
iz(b,a){return typeof
a==="number"?iA:0===a[0]?de(b,a[1]):dd(de(b,a[1]))}function
iB(e,d,c){var
a=d,b=c;for(;;)if(typeof
a==="number")return e;else{if(0===a[0])return a[1];var
f=a[3],g=a[2],h=a[1];if(typeof
b==="number")return g;else{if(0===b[0]){var
a=f,b=b[1];continue}var
a=h,b=b[1];continue}}}function
bl(b,a,c){return typeof
a==="number"?[0,c]:0===a[0]?[1,0,b,bl(b,a[1],c)]:[1,bl(b,a[1],c),b,0]}function
df(d,a,b,c){if(typeof
c==="number")return bl(d,a,b);else{if(0===c[0]){var
g=c[1];return typeof
a==="number"?[0,b]:0===a[0]?[1,0,g,bl(d,a[1],b)]:[1,bl(d,a[1],b),g,0]}var
e=c[3],h=c[2],f=c[1];return typeof
a==="number"?[1,f,b,e]:0===a[0]?[1,f,h,df(d,a[1],b,e)]:[1,df(d,a[1],b,f),h,e]}}var
iC=q[10],iD=q[8],iE=q[5],iG=0;function
iH(a,b){return ca(iG,iF,iE,iD,aj,iC,a,b)}var
iI=q[6],iJ=q[7],iK=q[5],iL=0;function
W(a,b){return x(iL,iK,iJ,iI,aj,a,b)}var
iM=q[5],iN=0;function
an(a,b){return M(iN,iM,aj,a,b)}var
iO=q[6],iP=q[7],iQ=q[8],iR=q[5],iT=0;function
bJ(a){return L(iT,iS,iR,iQ,iP,iO,aj,a)}function
eI(c){var
d=c[3],e=c[2],a=bJ(c[1]),b=bJ(d);switch(e){case
0:var
f=[0,[0,W(b,an(a,iU)),3],0];return[0,[0,W(a,an(b,iV)),3],f];case
1:return[0,[0,W(a,b),0],0];case
2:return[0,[0,W(a,an(b,iW)),3],0];case
3:return[0,[0,W(b,an(a,iX)),3],0];case
4:return[0,[0,W(a,b),3],0];default:return[0,[0,W(b,a),3],0]}}function
eJ(a){var
b=eI(a);return bi(function(a){return[0,a,0]},b)}function
eK(c){var
d=c[3],e=c[2],a=bJ(c[1]),b=bJ(d);switch(e){case
0:return[0,[0,W(a,b),0],0];case
1:var
f=[0,[0,W(b,an(a,iY)),3],0];return[0,[0,W(a,an(b,iZ)),3],f];case
2:return[0,[0,W(b,a),3],0];case
3:return[0,[0,W(a,b),3],0];case
4:return[0,[0,W(b,an(a,i0)),3],0];default:return[0,[0,W(a,an(b,i1)),3],0]}}function
eL(a){var
b=eK(a);return bi(function(a){return[0,a,0]},b)}var
i2=q[10],i3=0;function
dg(a){return bH(i3,aj,i2,a)}var
i4=q[5],i5=0;function
eM(a,b){return bG(i5,i4,aj,a,b)}function
eN(e,d){var
a=b(q[17],e,d),c=a[1];return typeof
a[2]==="number"?c:b(q[5],c,i6)}function
dh(c,a){var
d=b(q[19],c,a);return b(q[13],d,i7)}function
bK(d){var
a=d;for(;;)switch(a[0]){case
0:return[0,0,a[1]];case
1:var
a=a[2];continue;default:var
e=a[3],b=bK(a[1]),f=b[2],g=b[1],c=bK(e),h=c[2],i=c[1];return[0,dh(dh(g,f),i),h]}}function
bL(a,c){switch(a[0]){case
0:return[0,b(q[18],a[1],c)];case
1:var
d=a[1];return[1,d,bL(a[2],c)];default:var
e=a[2],f=a[1],g=bL(a[3],c);return[2,bL(f,c),e,g]}}function
cc(c){var
e=bK(c),f=e[2],d=e[1];if(b(q[12],d,0)){var
g=eN(a(q[6],f),d),h=a(q[6],g);return[0,bL(bj(q[7],c,f),d),h]}return[0,c,0]}function
cd(d){var
e=d[2],a=d[1];switch(e){case
0:var
f=bK(a),g=f[2],c=f[1];if(b(q[12],c,0))if(a5(aj(g,0)))if(a5(aj(b(q[19],c,g),c)))return 0;return[0,[0,cc(a),0]];case
1:return[0,[0,[0,a,0],e]];case
2:return[0,[0,cc(bj(q[7],a,i8)),3]];default:return[0,[0,cc(a),3]]}}function
eO(a){var
b=a[1],c=a[2];return[0,an(b[1],[0,b[2]]),c]}function
eP(a){return 0===a[0]?typeof
a[1]==="number"?1:0:0}var
i9=q[10],i_=q[8],i$=q[5],jb=0;function
bM(a,b){return aS(jb,ja,i$,i_,aj,i9,a,b)}function
di(a){return 0===a?1:3<=a?1:0}function
dj(w,v){var
d=w,c=v;for(;;)if(typeof
c==="number")return 0;else
switch(c[0]){case
0:var
x=c[2],g=bM(d,c[1]);if(g){var
h=g[1];if(dg(h))return 1;var
d=[0,h,d],c=x;continue}return 0;case
1:var
y=c[2],i=bM(d,c[1]);if(i){var
j=cd(i[1]);if(j){var
d=[0,eO(j[1]),d],c=y;continue}return 1}return 0;default:var
z=c[3],A=c[2],k=bM(d,c[1]);if(k){var
B=k[1],l=bM(d,A);if(l){var
C=l[1],m=cd(B);if(m){var
n=m[1],o=n[1],p=o[1],D=n[2],E=o[2],r=cd(C);if(r){var
s=r[1],t=s[1],F=s[2],G=t[2],H=t[1];if(di(D))if(di(F))if(eP(an(p,H))){var
f=z,e=a(q[6],E);for(;;){if(f){var
I=f[2],J=f[1],u=dj([0,[0,W(p,[0,e]),0],d],J);if(u){var
f=I,e=b(q[5],e,jc);continue}return u}return b(q[12],e,G)}}return 0}return 1}return 1}return 0}return 0}}function
jd(b,a){return b_(dg,eM,eJ,eL,dj,b,a)}function
eQ(a,b){return ca(jf,je,am,aA,al,bI,a,b)}function
eR(a){return db(jh,jg,am,aA,bk,a$,al,a)}function
eS(a){return dc(jj,ji,am,aA,bk,a$,al,a)}function
eT(a){return bH(jk,al,bI,a)}function
eU(a,b){return bG(jl,am,al,a,b)}function
jm(b,a){return b_(eT,eU,eR,eS,eQ,b,a)}function
ar(a){if(typeof
a==="number")return 0===a?jn:jo;else
switch(a[0]){case
0:return a[1];case
1:return[0,a[1],0];case
2:var
b=a[1],c=ar(a[2]);return am(ar(b),c);case
3:var
d=a[1],e=ar(a[2]);return bk(ar(d),e);case
4:var
f=a[1],g=ar(a[2]);return aA(ar(f),g);case
5:return dd(ar(a[1]));default:return a$(ar(a[1]))}}function
eV(a,b){return ca(jq,jp,am,aA,al,bI,a,b)}function
eW(a){return db(js,jr,am,aA,bk,a$,al,a)}function
eX(a){return dc(ju,jt,am,aA,bk,a$,al,a)}function
eY(a){return bH(jv,al,bI,a)}function
eZ(a,b){return bG(jw,am,al,a,b)}var
n=[0,a5,a6,ej,c0,hO,v,hW,b4,eo,bi,c4,q,aj,ij,ik,c7,P,et,E,eu,ev,_,aR,bj,bz,bA,c8,c9,M,x,bB,bC,ay,V,bD,ew,bE,ex,L,az,b7,b8,b9,ey,ez,bF,a6,ab,eA,b_,c_,c$,eB,eC,b$,da,eD,eE,bG,aS,bH,ca,L,x,M,eF,db,eG,dc,cb,iu,ak,eH,iv,iw,ix,al,bI,am,aA,a$,bk,dd,de,iz,iB,bl,df,iH,W,an,bJ,eI,eJ,eK,eL,dg,eM,eN,dh,bK,bL,cc,cd,eO,eP,bM,di,dj,jd,eQ,eR,eS,eT,eU,jm,ar,eV,eW,eX,eY,eZ,function(b,a){return b_(eY,eZ,eW,eX,eV,az(function(a){return eH(ar,a)},b),a)}];aw(597,n,"Micromega_plugin.Micromega");function
jx(e,c,d){var
a=d;for(;;){if(a){var
f=a[2];b(e,c,a[1]);b(j[55],c,jy);var
a=f;continue}return 0}}function
jz(b,c){try{var
d=a(b,0);a(c,0);return d}catch(b){b=u(b);try{a(c,0)}catch(a){throw b}throw b}}function
jA(e,d){var
b=e;for(;;){if(b){var
f=b[2],c=a(b[1][1],d);if(c)return c;var
b=f;continue}return 0}}function
jB(g,f){var
c=0,a=f;for(;;){if(a){var
d=a[2],i=a[1],h=function(d){return function(c,a){return[0,b(g,d,a),c]}}(i),c=e(o[20],h,c,d),a=d;continue}return c}}function
jC(f,d){var
c=0,a=d;for(;;){if(a){var
h=a[2],i=a[1],g=function(d){return function(c,a){return[0,b(f,d,a),c]}}(i),c=e(o[20],g,c,a),a=h;continue}return c}}function
jD(g,f,e){var
c=f,a=e;for(;;){if(c){var
h=c[2],i=c[1];if(a){var
d=a[2];if(b(g,i,a[1])){var
c=h,a=d;continue}var
a=d;continue}return 0}return 1}}function
jE(g,b){function
c(e,b){var
c=e[2],d=e[1];if(d)return[0,d,[0,b,c]];var
f=a(g,b);return f?[0,[0,[0,f[1],b]],c]:[0,d,[0,b,c]]}return e(o[20],c,jF,b)}function
ce(b){return 2===b[0]?a(e0[3],b[1]):m[2]}function
cf(b){switch(b[0]){case
0:return a(m[36],b[1]);case
1:return b[1];default:return a(e0[2],b[1])}}function
jG(f){var
c=m[1],a=f;for(;;){if(a){var
d=a[2],e=cf(a[1]),c=b(m[17],c,e),a=d;continue}return 0===b(m[23],c,m[1])?m[2]:c}}function
jH(f){var
c=m[2],a=f;for(;;){if(a){var
j=a[2],e=ce(a[1]),d=b(m[17],c,e),g=b(m[15],c,d),h=b(m[15],e,d),i=b(m[10],g,h),c=b(m[10],d,i),a=j;continue}var
k=function(a){var
d=ce(a),e=cf(a),f=b(m[10],e,c);return b(m[15],f,d)};return b(o[17],k,f)}}function
e1(a){return a?e1(a[1])+1|0:0}function
cg(a){return typeof
a==="number"?1:0===a[0]?1+(2*cg(a[1])|0)|0:2*cg(a[1])|0}function
jI(a){return a?cg(a[1]):0}function
dk(a){return typeof
a==="number"?1:0===a[0]?1+(2*dk(a[1])|0)|0:2*dk(a[1])|0}function
ch(a){if(typeof
a==="number")return m[2];else{if(0===a[0]){var
c=ch(a[1]),d=b(m[11],2,c);return b(m[7],1,d)}var
e=ch(a[1]);return b(m[11],2,e)}}function
dl(b){if(typeof
b==="number")return m[1];else{if(0===b[0])return ch(b[1]);var
c=ch(b[1]);return a(m[3],c)}}function
jJ(a){var
c=a[1],e=[1,dl([0,a[2]])],f=[1,dl(c)];return b(d[9],f,e)}function
e2(a){return 0===a?0:[0,e2(a-1|0)]}function
bm(a){return 1===a?0:1===(a&1)?[0,bm(a>>>1|0)]:[1,bm(a>>>1|0)]}function
jK(a){if(0<=a)return 0===a?0:[0,bm(a)];throw[0,ao,jL]}function
dm(a){return 1===a?0:1===(a&1)?[0,dm(a>>>1|0)]:[1,dm(a>>>1|0)]}function
jM(a){var
b=Z(a,0);return 0===b?0:1===b?[0,bm(a)]:[1,bm(-a|0)]}function
ci(d){var
f=a(m[36],2);function
c(a){if(b(m[24],a,m[2]))return 0;var
d=b(m[14],a,f),e=d[1];return b(m[24],m[2],d[2])?[0,c(e)]:[1,c(e)]}return c(d)}function
e3(b){var
c=a(m[22],b);return 0===c?0:1===c?[0,ci(b)]:[1,ci(a(m[3],b))]}function
jN(a){var
b=ci(ce(a));return[0,e3(cf(a)),b]}function
jO(d){var
b=d;for(;;){if(b){var
e=b[2],c=a(b[1],0);if(0===c){var
b=e;continue}return c}return 0}}function
jP(g,f,e){var
c=f,a=e;for(;;){if(c){if(a){var
h=a[2],i=c[2],d=b(g,c[1],a[1]);if(0===d){var
c=i,a=h;continue}return d}return 1}return a?-1:0}}function
jQ(a){return a}function
jR(a){return a+1|0}function
jS(d,c){var
e=a(j[22],c);return b(j[55],d,e)}var
C=a(e4[1],[0,Z]);function
jT(a){for(;;)try{var
d=b(A[15],0,a)[2];return d}catch(a){a=u(a);if(a[1]===A[1]){var
c=a[2];if(typeof
c==="number")if(11===c)continue}throw a}}function
jU(c,s,r){var
f=b(A[67],0,0),g=f[2],h=f[1],i=b(A[67],0,0),k=i[2],l=i[1],m=b(A[67],0,0),n=m[2],t=m[1],v=S(A[69],c,s,h,k,n),q=a(A[31],g);b(j[61],q,r);a(j[52],q);var
d=jT(v);function
w(e){var
c=[0,h,[0,g,[0,l,[0,k,[0,t,[0,n,0]]]]]];function
d(b){try{var
c=a(A[24],b);return c}catch(a){return 0}}return b(o[15],d,c)}return jz(function(o){switch(d[0]){case
0:var
b=d[1];if(0===b){var
f=a(A[30],l);try{var
i=a(cj[3],f);return i}catch(b){b=u(b);var
g=a(dn[1],b),h=e(p[4],jV,c,g);return a(j[3],h)}}var
k=e(p[4],jW,c,b);return a(j[3],k);case
1:var
m=e(p[4],jX,c,d[1]);return a(j[3],m);default:var
n=e(p[4],jY,c,d[1]);return a(j[3],n)}},w)}var
i=[0,cf,ce,[0,jP,jO],[0,jS,jR,jQ],[0,C[1],C[2],C[3],C[4],C[5],C[6],C[7],C[8],C[9],C[10],C[11],C[12],C[13],C[15],C[16],C[17],C[18],C[19],C[20],C[21],C[22],C[24],C[26],C[28]],jx,[0,bm,e3,jK,e2,jN,dm,jM,ci],[0,dl,jJ,cg,jI,e1,dk],jH,jC,jB,jA,jD,jG,jE,jU];aw(606,i,"Micromega_plugin.Mutils");var
e5=d[2],bn=d[7],Q=a(ck[1],[0,Z]),bo=Q[1];function
e6(a){var
b=0;function
c(c,b,a){return a+b|0}return e(Q[13],c,a,b)}function
cl(b,a){var
c=e6(b),d=e6(a);return c===d?e(Q[10],Z,b,a):Z(c,d)}function
bN(a){return ae(a,Q[1])}function
e7(a){try{var
b=1,c=function(c,b,a){if(1===a){if(1===b)return 0;throw H}throw H},d=1-e(Q[13],c,a,b);return d}catch(a){a=u(a);if(a===H)return 0;throw a}}function
jZ(a){if(bN(a))return 0;try{var
b=function(c,b,f){var
d=b/2|0;if(0===(b%2|0))return e(Q[4],c,d,a);throw H},c=[0,e(Q[13],b,a,bo)];return c}catch(a){a=u(a);if(a===H)return 0;throw a}}function
dp(c,a){try{var
d=b(Q[27],c,a);return d}catch(a){a=u(a);if(a===H)return 0;throw a}}function
cm(b,a){function
c(b,c,a){var
d=dp(b,a)+c|0;return e(Q[4],b,d,a)}return e(Q[13],c,b,a)}function
e8(c,a){var
f=j[8];function
g(e,d,a){var
f=B.caml_div(dp(e,c),d);return b(j[5],a,f)}var
d=e(Q[13],g,a,f),h=Q[1];function
i(c,g,b){var
f=g-cR(dp(c,a),d)|0;return 0===f?b:e(Q[4],c,f,b)}return[0,e(Q[13],i,c,h),d]}var
j0=Q[13],X=a(ck[1],[0,cl]);function
e9(c,a){try{var
d=b(X[27],c,a);return d}catch(a){a=u(a);if(a===H)return j1;throw a}}function
j2(b){var
c=X[1],a=e(Q[4],b,1,Q[1]);return e(X[4],a,j3,c)}function
e_(a){return e(X[4],bo,a,X[1])}function
e$(f,g,c){if(0===a(d[25],g))return c;var
h=b(e5,e9(f,c),g);return 0===a(d[25],h)?b(X[7],f,c):e(X[4],f,h,c)}function
fa(b,a){function
c(c,b,a){return e$(c,b,a)}return e(X[13],c,b,a)}function
j5(c,i){var
f=X[1];function
g(k,c,j){if(0===a(d[25],c))var
f=e_(j4);else
var
g=X[1],h=function(f,d,a){var
g=b(bn,c,d),h=cm(k,f);return e(X[4],h,g,a)},f=e(X[13],h,i,g);return fa(f,j)}return e(X[13],g,c,f)}function
j6(c){function
e(b){return a(d[3],b)}return b(X[33],e,c)}var
fb=X[13];function
j7(a){var
b=1;function
c(b,e,a){if(a){var
c=bN(b);if(!c)return e7(b);var
d=c}else
var
d=a;return d}return e(X[13],c,a,b)}function
j8(k,j){var
c=k,a=j;for(;;){if(c){var
e=c[1],l=c[2],m=e[2],n=e[1];if(a){var
f=a[1],g=n===f[1]?1:0,o=a[2],p=f[2];if(g){var
h=b(d[26],m,p);if(h){var
c=l,a=o;continue}var
i=h}else
var
i=g;return i}return 0}return a?0:1}}function
j9(f){var
c=0,b=f;for(;;){if(b){var
e=b[1],g=b[2],h=e[1],i=[0,h,a(d[56],e[2])],c=c+a(ba[27],i)|0,b=g;continue}return a(ba[27],c)}}var
j_=0;function
dq(g,c){function
f(b){var
c=b[1],f=a(d[40],b[2]);return e(p[2],j$,f,c)}return b(o[15],f,c)}function
ka(a){function
e(i,h){var
c=i,a=h;for(;;){if(a){var
f=a[2],g=a[1];if(b(d[31],g,kb))return[0,[0,c,g],e(c+1|0,f)];var
c=c+1|0,a=f;continue}return 0}}return e(0,a)}function
kc(a){function
b(c,a){if(a){var
d=a[1],e=a[2],f=d[2];return c===d[1]?[0,f,b(c+1|0,e)]:[0,dr,b(c+1|0,a)]}return 0}return b(0,a)}function
bp(e,c,a){return b(d[26],c,kd)?a:[0,[0,e,c],a]}function
fc(d,c,b){if(b){var
f=b[2],g=b[1],h=g[2],e=g[1],i=Z(d,e)+1|0;if(2<i>>>0)return a(j[3],ke);switch(i){case
0:return bp(d,a(c,dr),b);case
1:return bp(e,a(c,h),f);default:return[0,[0,e,h],fc(d,c,f)]}}return bp(d,a(c,dr),0)}function
fd(d,c,b){if(b){var
f=b[2],g=b[1],e=g[1],h=Z(d,e)+1|0,i=g[2];if(2<h>>>0)return a(j[3],kf);switch(h){case
0:return bp(d,c,b);case
1:return bp(e,c,f);default:return[0,[0,e,i],fd(d,c,f)]}}return bp(d,c,0)}function
ds(a,c){if(0===a[0]){var
e=a[1];if(0===e)return 0;if(1===e)return c}function
f(c){var
e=c[1];return[0,e,b(d[7],a,c[2])]}return b(o[17],f,c)}function
bO(o,n){var
c=o,a=n;for(;;){if(c){if(a){var
f=a[2],i=a[1],j=i[2],g=i[1],h=c[2],k=c[1],l=k[2],e=k[1];if(ae(e,g)){var
m=b(d[1],l,j);if(b(d[26],m,kg)){var
c=h,a=f;continue}return[0,[0,e,m],bO(h,f)]}return d8(e,g)?[0,[0,e,l],bO(h,a)]:[0,[0,g,j],bO(c,f)]}return c}return a?a:0}}function
kh(e,c){var
f=0,g=[0,function(a){return b(d[37],e[2],c[2])},f],h=[0,function(a){return Z(e[1],c[1])},g];return a(i[3][2],h)}var
ki=a(i[3][1],kh);function
fe(h,g){var
a=g;for(;;){if(a){var
c=a[1],d=Z(c[1],h),e=a[2],f=c[2];if(-1===d){var
a=e;continue}var
b=0===d?[0,[0,f,a]]:0}else
var
b=0;return b?[0,b[1][1]]:0}}function
kj(c){var
a=c;for(;;){if(a){var
b=a[2],d=a[1][1];if(b){var
a=b;continue}return d+1|0}return 1}}function
km(c,b){var
e=b[2],f=b[1],g=a(d[40],b[3]),h=0===e?kk:kl;return J(p[1],c,kn,dq,f,h,g)}function
ko(b,a){if(0===b){if(0===a)return 0}else
if(0!==a)return 1;return 1}function
as(d,c){if(typeof
c==="number")return b(p[1],d,kp);else
switch(c[0]){case
0:return e(p[1],d,kq,c[1]);case
1:return e(p[1],d,kr,c[1]);case
2:var
f=a(m[33],c[1]);return e(p[1],d,ks,f);case
3:return b(p[1],d,kt);case
4:return Y(p[1],d,ku,as,c[2]);case
5:var
g=c[2],h=a(m[33],c[1]);return S(p[1],d,kv,as,g,h);case
6:return J(p[1],d,kw,as,c[1],as,c[2]);case
7:return J(p[1],d,kx,as,c[1],as,c[2]);default:return Y(p[1],d,ky,as,c[1])}}function
dt(d,c){if(typeof
c==="number")return b(p[1],d,kz);else{if(0===c[0])return d9(p[1],d,kA,c[1],as,c[2],dt,c[3]);var
e=c[5],f=c[4],g=c[3],h=c[2],j=c[1],k=a(i[6],dt);return uN(p[1],d,kB,j,as,h,dq,g,as,f,k,e)}}function
bP(e){var
a=e;for(;;){if(typeof
a==="number")var
c=0;else
switch(a[0]){case
8:var
d=a[1],c=1;break;case
0:case
1:return a[1];case
4:case
5:var
d=a[2],c=1;break;case
6:case
7:var
f=a[1],g=bP(a[2]),h=bP(f);return b(j[6],h,g);default:var
c=0}if(c){var
a=d;continue}return-1}}function
du(a){if(typeof
a==="number")return-1;else{if(0===a[0]){var
c=a[2],d=a[1],f=du(a[3]),g=bP(c),h=b(j[6],g,f);return b(j[6],d,h)}var
i=a[5],k=a[2],l=a[1],m=bP(a[4]),n=bP(k),p=b(j[6],n,m),q=b(j[6],l,p),r=function(c,a){var
d=du(a);return b(j[6],c,d)};return e(o[20],r,q,i)}}function
aB(c,a){if(typeof
a!=="number")switch(a[0]){case
4:var
n=a[1],d=aB(c,a[2]);return[0,d[1],d[2],[4,n,d[3]]];case
5:var
e=aB(c,a[2]),f=e[2];return[0,[0,[0,f,e[3]],e[1]],f+1|0,[1,f]];case
6:var
o=a[2],g=aB(c,a[1]),p=g[3],q=g[1],h=aB(g[2],o),r=h[2],s=[6,p,h[3]];return[0,b(j[26],h[1],q),r,s];case
7:var
t=a[2],i=aB(c,a[1]),u=i[3],v=i[1],k=aB(i[2],t),w=k[2],x=[7,u,k[3]];return[0,b(j[26],k[1],v),w,x];case
8:var
l=aB(c,a[1]),m=l[2];return[0,[0,[0,m,l[3]],l[1]],m+1|0,[1,m]]}return[0,0,c,a]}function
dv(c,a){if(typeof
a!=="number"&&8===a[0]){var
b=aB(c,a[1]);return[0,b[1],b[2],[8,b[3]]]}return aB(c,a)}function
ff(b){var
a=b;for(;;){if(typeof
a!=="number"&&8===a[0]){var
a=a[1];continue}return a}}function
dw(f,n){var
c=n;for(;;)if(typeof
c==="number")return[0,f,0];else{if(0===c[0]){var
d=c[2],k=c[1];if(typeof
d!=="number"&&5===d[0])if(typeof
c[3]==="number"){var
c=[0,k,d[2],0];continue}var
p=c[3],g=dv(f,d),q=g[3],r=g[1],l=dw(g[2],p),s=l[1],t=[0,k,q,l[2]],u=function(b,a){return[0,a[1],[8,a[2]],b]};return[0,s,e(o[20],u,t,r)]}var
v=c[5],w=c[4],x=c[3],y=c[1],h=dv(f,ff(c[2])),z=h[3],A=h[2],B=h[1],i=dv(A,ff(w)),C=i[3],D=i[2],E=i[1],F=function(a){return dw(D,a)},G=b(o[17],F,v),m=a(o[46],G),H=m[2],I=m[1],J=b(j[26],E,B),K=[1,y,z,x,C,H],L=function(b,a){return[0,a[1],[8,a[2]],b]},M=e(o[20],L,K,J);return[0,e(o[20],j[6],0,I),M]}}function
kC(b,a){return dw(b,a)}function
fg(b,a){if(typeof
b==="number")var
c=a;else{if(typeof
a!=="number")return[7,b,a];var
c=b}return c}function
dx(c,d){var
e=a(m[22],c)+1|0;if(2<e>>>0)throw[0,ao,kD];switch(e){case
0:return[4,[0,0,[1,c]],d];case
1:return 0;default:return b(m[24],c,m[2])?d:[6,[2,c],d]}}var
cn=a(ck[1],[0,cl]),co=a(ck[1],[0,Z]),cp=[0,cn[1]],cq=[0,co[1]],dy=[0,0];function
kE(a){cp[1]=cn[1];cq[1]=co[1];dy[1]=0;return 0}function
cr(c){try{var
a=b(cn[27],c,cp[1]);return a}catch(a){a=u(a);if(a===H){var
d=dy[1];cp[1]=e(cn[4],c,d,cp[1]);cq[1]=e(co[4],d,c,cq[1]);dy[1]++;return d}throw a}}function
cs(a){return b(co[27],a,cq[1])}function
fh(a){var
c=a[2],d=a[1];function
e(b,a){return Z(b[1],a[1])}return[0,b(o[48],e,d),c]}function
kF(b){var
a=e(fb,function(c,b,a){var
d=a[1],e=a[2];return bN(c)?[0,d,b]:[0,[0,[0,cr(c),b],d],e]},b,kG);return fh([0,a[1],a[2]])}var
l=[0,[0,j0,bo,jZ,e7,e8,cl],[0,e_,j2,fa,j5,j6,e9,fb,j7,e$],[0,j9,j8,ki,dq,fe,fd,kj,fc,j_,ka,kc,bO,ds],du,kC,dt,fg,dx,[0,[0,kE,cs],function(I,c){var
J=c[2],w=c[1],f=fe(I,w[1]);if(f){var
K=f[1];return function(L){var
A=L[1],S=L[2],T=A[2],B=cs(I);function
E(b,a){var
c=a[2],d=b[2],e=a[1],f=b[1];return d8(d,c)?-1:ae(d,c)?cl(f,e):1}var
r=[0,bo,j[8]],q=[0,A,S];a:for(;;){var
s=q[2],g=q[1],ac=r[2],ad=r[1],Z=g[1],_=[0,kK,bo,0],$=function(a,b){var
c=a[3],d=a[2],h=b[2],i=a[1],e=e8(cs(b[1]),B),f=e[2],g=e[1];return-1===E([0,d,c],[0,g,f])?[0,h,g,f]:[0,i,d,c]},p=e(o[20],$,_,Z),F=p[3],aa=p[2],ab=p[1],G=0<F?[0,[0,ab,aa,F]]:0;if(G){var
t=G[1],u=t[3],v=t[2],af=t[1];if(-1===E([0,v,u],[0,ad,ac])){var
m=a(d[15],K),c=b(bn,[0,-a(d[25],K)|0],af),l=bo,k=u-1|0;for(;;){if(0===k){var
f=cm(v,l),n=a(d[3],w[3]),C=w[1];if(bN(f))var
M=b(bn,c,n),h=[0,ds(c,C),M];else
if(0===a(d[25],c))var
h=kH;else{if(0===a(d[25],n))var
z=0;else
var
P=b(bn,c,n),z=[0,[0,cr(f),P],0];var
N=function(e,f){return function(a){var
c=a[2],d=cr(cm(f,cs(a[1])));return[0,d,b(bn,e,c)]}}(c,f),O=b(o[17],N,C),h=fh([0,b(j[26],z,O),kI])}var
Q=h[2],R=h[1],U=b(bn,m,g[3]),V=b(e5,a(d[3],Q),U),W=[0,bO(ds(m,g[1]),R),T,V],X=dx(a(i[1],m),s),D=bN(f)?[0,0,c]:[0,[0,[0,cr(f),c],0],kJ],x=D[2],y=D[1],Y=y?[4,[0,y,x],J]:dx(a(i[1],x),J),r=[0,v,u],q=[0,W,fg(Y,X)];continue a}var
l=cm(l,B),k=k-1|0;continue}}var
H=[0,g,s]}else
var
H=[0,g,s];return[0,H]}}}return function(a){return 0}},kF],km,ko];aw(611,l,"Micromega_plugin.Polynomial");function
fi(a){var
c=a[1];if(c){var
e=a[2];if(e)return b(d[29],c[1],e[1])?[0,a]:0}return[0,a]}function
fj(c,a){var
f=a[2],g=a[1],h=c[2],i=c[1];function
e(d,c,a){if(c){var
e=c[1];return a?[0,b(d,e,a[1])]:c}return a?a:0}var
j=e(d[39],h,f);return fi([0,e(d[38],i,g),j])}function
dz(c){var
e=c[1];if(e){var
f=c[2];if(f){var
g=f[1],h=a(d[24],e[1]),i=a(d[22],g),j=b(d[4],i,h);return[0,b(d[1],j,kL)]}}return 0}function
kM(f,e){var
a=dz(f),c=dz(e);return a?c?b(d[29],a[1],c[1]):1:0}function
fk(e,a){var
c=e[2],f=e[1];if(f){var
g=f[1];if(c){var
i=c[1],h=b(d[29],g,a);return h?b(d[29],a,i):h}return b(d[29],g,a)}return c?b(d[29],a,c[1]):1}var
bQ=a(k[20][1],[0,Z]),fl=l[3],af=a(ba[25],[0,fl[2],fl[1]]),fm=[0,j[8]],bR=[a4,kN,a2(0)];function
bS(b,a){switch(a[0]){case
0:return e(p[1],b,kO,a[1]);case
1:return d9(p[1],b,kP,a[1],bS,a[2],bS,a[3]);default:return J(p[1],b,kQ,bS,a[1],bS,a[2])}}function
kR(b,a){var
c=b[4],d=b[3],f=a[4],g=a[2],h=a[1],i=b[2],j=b[1];if(d===a[3])if(c===f){var
e=fj(j,h);return e?[0,[0,e[1],[2,i,g],d,c]]:0}throw[0,ao,kS]}function
kT(f,c,d){try{var
a=b(af[7],d,f),g=kR(c,a[1]);if(g){a[1]=g[1];var
h=0;return h}throw[0,bR,[2,c[2],a[1][2]]]}catch(a){a=u(a);if(a===H)return e(af[10],d,f,[0,c]);throw a}}var
fn=[a4,kU,a2(0)];function
dA(d,c,b){var
e=fm[1];if(a(af[15],b)<e)return kT(d,c,b);throw fn}function
dB(e,c){var
j=fi(c[1]);if(j){var
l=j[1],h=l[2],i=l[1];if(e){var
f=e[1][2],g=function(a){return b(d[9],a,f)};if(1===a(d[25],f))var
o=c[4],p=c[3],q=c[2],r=b(ag[16],g,h),m=[0,[0,b(ag[16],g,i),r],q,p,o];else
var
t=c[3],u=c[4],v=c[2],w=b(ag[16],g,i),m=[0,[0,b(ag[16],g,h),w],v,u,t];if(b(d[31],f,kV))var
s=function(a){var
c=a[1];return[0,c,b(d[9],a[2],f)]},n=b(k[17][69],s,e);else
var
n=e;return[0,n,m]}return fk([0,i,h],kW)?1:0}return 0}function
kX(a){return 0===a?d[26]:d[30]}function
fo(h){var
e=0,c=0,b=h;for(;;){if(b){var
f=b[2],g=a(d[25],b[1][2]);if(0===g)throw[0,ao,kY];if(1===g){var
c=c+1|0,b=f;continue}var
e=e+1|0,b=f;continue}return[0,e,c]}}function
fp(a,e){var
b=a[3],c=a[1],f=a[2],d=fo(c),g=d[2],h=d[1],i=[0,e],j=0===f?[0,[0,b],[0,b]]:[0,[0,b],0];return dB(c,[0,j,i,g,h])}function
kZ(d){var
c=a(af[1],1e3);function
f(b,a){return[0,a,b]}var
g=b(k[17][13],f,d),h=bQ[1];function
i(f,d){var
g=d[2],h=d[1],a=fp(h,g);if(typeof
a==="number"){if(0===a)throw[0,bR,[0,g]];return f}dA(a[1],a[2],c);var
i=h[1];function
j(c,a){return b(bQ[4],a[1],c)}return e(k[17][15],j,f,i)}return[0,c,e(k[17][15],i,h,g)]}function
fq(a){var
b=a[1],c=0;function
d(c,b,a){return[0,[0,c,b[1]],a]}return e(af[14],d,b,c)}function
dC(f,c){var
g=c[2],h=f[2],i=c[1],j=f[1];if(b(d[31],h,k0))if(b(d[31],g,k1)){var
e=function(s,r){var
c=s,a=r;for(;;){if(c){if(a){var
i=a[2],m=a[1],n=m[2],j=m[1],l=c[2],o=c[1],p=o[2],f=o[1];if(f===j){var
t=b(d[9],n,g),u=b(d[9],p,h),q=b(d[1],u,t);if(b(d[26],q,k2)){var
c=l,a=i;continue}return[0,[0,f,q],e(l,i)]}if(f<j){var
v=e(l,a);return[0,[0,f,b(d[9],p,h)],v]}var
w=e(c,i);return[0,[0,j,b(d[9],n,g)],w]}var
x=function(a){var
c=a[1];return[0,c,b(d[9],a[2],h)]};return b(k[17][69],x,c)}if(a){var
y=function(a){var
c=a[1];return[0,c,b(d[9],a[2],g)]};return b(k[17][69],y,a)}return 0}},a=e(j,i);return[0,a,fo(a)]}throw[0,ao,k3]}function
k4(i,c){var
h=c[1];function
j(k,t,j){var
c=t[1],f=j[3],g=j[2],h=j[1],m=b(l[3][5],i,k);if(m){var
n=m[1],e=function(b,a){return a?[0,[0,n,k,[0,[0,[0,a[1]],0],c[2],c[3],c[4]]],b]:b},o=c[1],p=o[2],q=o[1];if(1===a(d[25],n)){var
r=e(f,p);return[0,e(h,q),g,r]}var
s=e(f,q);return[0,e(h,p),g,s]}return[0,h,[0,[0,k,c],g],f]}var
f=e(af[14],j,h,k5),m=f[3],n=f[2],o=f[1],p=a(af[15],c[1]),g=a(af[1],p);function
q(a){return e(af[10],g,a[1],[0,a[2]])}b(k[17][11],q,n);function
r(e){function
c(f){var
h=f[3],j=f[1],k=e[3],l=e[1],p=f[2],q=e[2],r=h[1],s=a(ag[7],k[1][1]),t=a(ag[7],r[1]),u=a(d[3],j),v=b(d[9],t,u),w=b(d[9],s,l),x=b(d[1],w,v),m=dC([0,q,l],[0,p,a(d[3],j)]),n=m[2],o=[0,[0,[0,x],0],[1,i,k[2],h[2]],n[2],n[1]],c=dB(m[1],o);if(typeof
c==="number"){if(0===c)throw[0,bR,o[2]];return 0}return dA(c[1],c[2],g)}return b(k[17][11],c,m)}b(k[17][11],r,o);return[0,g,b(bQ[6],i,c[2])]}function
k7(c,r,D,C,e){var
f=b(l[3][5],c,r),s=a(ag[7],f),g=a(af[15],e[1]),t=a(af[1],g),h=e[1];function
i(f,E){var
g=E[1],i=b(l[3][5],c,f);if(i)var
j=i[1],k=b(d[30],j,k6)?a(d[3],s):s,m=a(d[15],j),n=dC([0,r,k],[0,f,m]),o=n[2],v=o[2],w=o[1],x=n[1],y=b(d[9],D,k),p=function(a){var
c=b(d[9],a,m);return b(d[1],y,c)},q=g[1],z=q[1],A=b(ag[16],p,q[2]),B=[0,b(ag[16],p,z),A],h=[0,x,[0,B,[1,c,C,g[2]],v,w]];else
var
h=[0,f,g];var
u=h[2],e=dB(h[1],u);if(typeof
e==="number"){if(0===e)throw[0,bR,u[2]];return 0}return dA(e[1],e[2],t)}b(af[12],i,h);return[0,t,b(bQ[6],c,e[2])]}var
y=a(k8[1],[0,Z]);function
fr(v,t,c){function
f(z,x,w){function
g(l,e,k){var
c=l,a=k;for(;;){if(c){var
f=c[2],h=c[1],i=h[2],j=h[1];try{var
m=b(y[22],j,v),n=b(d[6],m,i),o=g(f,b(d[1],e,n),a);return o}catch(b){b=u(b);if(b===H){var
c=f,a=[0,[0,j,i],a];continue}throw b}}return[0,e,a]}}var
h=g(z,k9,0),n=h[1],o=b(l[3][5],t,h[2]),p=o?o[1]:lc,e=x[1][1];function
c(a){var
c=b(d[4],a,n);return b(d[9],c,p)}var
i=e[2],k=e[1],m=a(d[25],p);if(0===m)var
f=fk(e,n)?k_:a(j[3],k$);else
if(1===m)var
r=b(ag[16],c,i),f=[0,b(ag[16],c,k),r];else
var
s=b(ag[16],c,k),f=[0,b(ag[16],c,i),s];var
q=fj(w,f);return q?q[1]:a(j[3],lb)}return e(af[14],f,c,la)}function
ll(g,l,j,d,c){function
e(c,f){var
m=a(l,c);try{var
q=function(a){return a[1][1]!==g?1:0},d=b(k[17][27],q,m)[1],i=d[1],r=e(k7(i,d[2],d[3],d[4],c),[0,[0,i,c],f]);return r}catch(d){d=u(d);if(d===H){var
n=a(j,c);try{var
o=function(a){return a[1]!==g?1:0},h=b(k[17][27],o,n)[1],p=e(k4(h,c),[0,[0,h,c],f]);return p}catch(a){a=u(a);if(a===H)return[0,[0,c,f]];throw a}}throw d}}return e(d,c)}function
fs(d,c,b,a){try{var
e=ll(d,c,b,kZ(a),0);return e}catch(a){a=u(a);if(a[1]===bR)return[1,a[2]];throw a}}function
ft(c){var
f=c[2],g=[0,0,fq(c)];function
h(w,v){var
f=v[2],c=0,h=0,i=0,g=0,F=v[1];for(;;){if(f){var
j=f[2],n=f[1],b=n[2],l=n[1];if(l){var
o=l[2],p=l[1],x=p[2];if(w===p[1]){var
m=function(b){return function(a,c){return c?[0,b[4]+b[3]|0,a]:a}}(b),q=b[1],r=q[2],s=q[1];if(1===a(d[25],x)){var
y=m(g,r),f=j,c=[0,[0,o,b],c],h=m(h,s),g=y;continue}var
z=m(g,s),f=j,c=[0,[0,o,b],c],h=m(h,r),g=z;continue}var
f=j,c=[0,[0,l,b],c],i=(b[4]+b[3]|0)+i|0;continue}var
f=j,c=[0,[0,0,b],c],i=(b[4]+b[3]|0)+i|0;continue}var
t=a(k[17][1],h),A=0,B=function(b,a){return b+a|0},C=e(k[17][15],B,A,h),u=a(k[17][1],g),D=0,E=function(b,a){return b+a|0};return[0,[0,[0,w,i+u*C+t*e(k[17][15],E,D,g)-u*t],F],c]}}var
i=e(bQ[15],h,f,g)[1];function
j(b,a){return B.caml_float_compare(b[2],a[2])}return b(k[17][39],j,i)}function
fu(a){var
c=a[1];if(c){var
e=a[2];if(e)return b(d[26],c[1],e[1])}return 0}function
fv(b,e){var
a=e;for(;;){if(a){var
c=a[2],d=a[1][1];if(d===b)return[0,1,c];if(d<b){var
a=c;continue}return[0,0,a]}return lm}}function
fw(E){var
o=fq(E),F=0;function
G(c,e){var
a=e[2],f=a[1],g=f[1],j=e[1];if(g){var
h=f[2];if(h){var
i=g[1];return b(d[26],i,h[1])?[0,[0,j,i,a[2],a[4]+a[3]|0],c]:c}}return c}var
p=e(k[17][15],G,F,o),a=p;for(;;){if(a){var
c=a[1],f=c[1],t=a[2],u=c[4],v=c[3],w=c[2];if(f)if(f[2])var
q=0;else
var
n=[0,[0,f[1][1],f,w,v,u]],q=1;else
var
q=0;if(!q){var
a=t;continue}}else
var
n=0;if(n)var
j=[0,n[1]];else{var
h=p;b:for(;;){if(h){var
i=h[1],s=i[1],g=s,A=h[2],B=i[4],C=i[3],D=i[2];for(;;){if(g){var
r=g[1][1],z=g[2],x=0,y=function(d){return function(a,b){var
c=b[2];return fv(d,b[1])[1]?fu(c[1])?a+1|0:a:a}}(r);if(2!==e(k[17][15],y,x,o)){var
g=z;continue}var
m=[0,r]}else
var
m=0;if(!m){var
h=A;continue b}var
j=[0,[0,m[1],s,D,C,B]];break}}else
var
j=0;break}}if(j){var
l=j[1];return[0,[0,[0,l[1],l[2],l[3],l[4]],0],0]}var
H=0,I=function(s,f){var
p=f[1],e=p,m=o,j=s,t=f[4],u=f[3],v=f[2];a:for(;;){if(e){var
n=e[1][1],c=m,b=0,a=0,q=e[2],r=t-1|0;for(;;){if(c){var
g=c[2],k=c[1],d=k[2],h=d[3]+d[4]|0,l=fv(n,k[1]),i=l[2];if(0===l[1]){var
c=g,b=b+h|0,a=[0,[0,i,d],a];continue}if(fu(d[1])){var
c=g,b=b+h|0,a=[0,[0,i,d],a];continue}var
c=g,b=(b+h|0)+r|0,a=[0,[0,i,d],a];continue}var
e=q,m=a,j=[0,[0,[0,n,p,v,u],b],j];continue a}}return j}},J=e(k[17][15],I,H,p),K=function(b,a){return Z(b[2],a[2])};return b(k[17][39],K,J)}}function
ln(g,d){var
h=0;function
i(d,c){var
e=a(l[3][7],c[1]);return b(j[1][5],d,e)}var
c=e(k[17][15],i,h,d),f=fs(c,fw,ft,[0,[0,e(l[3][6],c,lp,g),0,lo],d]);if(0===f[0]){var
m=f[1][1];try{var
o=[0,fr(y[1],c,m[1])];return o}catch(c){c=u(c);if(a(aT[18],c)){var
n=a(dn[1],c);b(p[2],lq,n);return 0}throw c}}return 0}function
lr(x){var
i=fs(j[8],fw,ft,x);if(0===i[0]){var
h=i[1][2],g=y[1];for(;;){if(h){var
s=h[1],t=s[1],z=h[2],l=fr(g,t,s[2][1]),n=l[1];if(n){var
o=l[2],c=n[1];if(o){var
p=o[1];if(b(d[29],c,ld))if(b(d[29],le,p))var
f=lf,m=1;else
var
m=0;else
var
m=0;if(!m)var
u=a(d[22],p),v=a(d[24],c),f=b(d[29],v,u)?a(d[24],c):c}else
var
f=b(d[29],c,lg)?lh:a(d[24],c)}else{var
q=l[2];if(q)var
r=q[1],w=a(d[22],r),f=b(d[29],li,w)?lj:a(d[22],r);else
var
f=lk}var
h=z,g=e(y[4],t,f,g);continue}var
A=0,B=function(c,b,a){return[0,[0,c,b],a]},C=e(y[11],B,g,A);return[0,a(k[17][9],C)]}}return[1,i[1]]}function
bb(b,a){return dC(b,a)[1]}function
ct(b,a){if(0===b)if(0===a)return 0;return 1}function
fx(s,r,q){var
j=q[2],k=q[1],m=r[2],n=r[1],o=j[3],f=j[2],g=j[1],p=m[3],h=m[2],i=m[1],t=b(l[3][5],s,i),u=b(l[3][5],s,g);if(t)if(u){var
c=u[1],e=t[1],v=a(d[25],c);if(-1===cR(a(d[25],e),v)){var
w=a(d[15],c),x=b(d[9],o,w),y=a(d[15],e),z=b(d[9],p,y),A=b(d[1],z,x),B=ct(h,f),C=[0,g,a(d[15],c)],D=[0,bb([0,i,a(d[15],e)],C),B,A],E=[0,k,a(d[15],c)];return[0,[0,bb([0,n,a(d[15],e)],E),D]]}if(0===h){var
F=b(d[9],o,ls),G=b(d[9],e,c),H=a(d[3],G),I=b(d[9],p,H),J=b(d[1],I,F),K=ct(h,f),L=b(d[9],e,c),M=[0,bb([0,i,a(d[3],L)],[0,g,lt]),K,J],N=b(d[9],e,c);return[0,[0,bb([0,n,a(d[3],N)],[0,k,lu]),M]]}if(0===f){var
O=b(d[9],p,lv),P=b(d[9],c,e),Q=a(d[3],P),R=b(d[9],o,Q),S=b(d[1],R,O),T=ct(h,f),U=b(d[9],c,e),V=[0,bb([0,g,a(d[3],U)],[0,i,lw]),T,S],W=b(d[9],c,e);return[0,[0,bb([0,k,a(d[3],W)],[0,n,lx]),V]]}return 0}return 0}var
lE=[0,function(y,c){function
f(c){switch(c[0]){case
0:var
l=c[1];return[0,[0,[0,[0,l,lC],0],b(k[17][7],y,l)],0];case
1:var
z=c[3],A=c[1],B=f(c[2]),C=f(z),v=0,w=function(a,c){function
b(a,d){var
b=fx(A,c,d);return b?[0,b[1],a]:a}return e(k[17][15],b,a,C)};return e(k[17][15],w,v,B);default:var
D=c[2],E=f(c[1]),F=f(D),G=b(k[18],E,F),x=function(b,d){var
c=d[2],e=d[1];if(0===b[0]){var
f=b[1],a=fp(c,0);return typeof
a==="number"?0===a?[1,[0,e,c]]:[0,f]:[0,[0,[0,e,c,a[1],a[2]],f]]}return b},h=e(k[17][15],x,ly,G);if(0===h[0]){var
H=h[1],I=function(k,i){if(0===k[0]){var
t=k[1],l=i[2],m=i[1],n=i[4][1],x=t[2],y=t[1],u=n[2],v=n[1],o=function(e,c,a){if(c){var
f=c[1][3];if(a){var
d=a[1];return b(e,f,d)?[0,[0,m,l,d]]:c}return c}return a?[0,[0,m,l,a[1]]]:0},c=o(d[29],y,v),e=o(d[30],x,u);if(c)if(e){var
f=e[1],g=f[2],p=f[1],h=c[1],q=h[1],w=h[2];if(b(d[29],h[3],f[3]))return[0,[0,c,e]];var
r=g[1];if(r){var
s=fx(r[1][1],[0,q,w],[0,p,g]);return s?[1,s[1]]:a(j[3],lz)}return[1,[0,bb([0,q,lB],[0,p,lA]),g]]}return[0,[0,c,e]]}return k},i=e(k[17][15],I,lD,H);if(0===i[0]){var
m=i[1],g=m[2],n=m[1];if(n){var
o=n[1],p=o[2],q=o[1];if(g){var
r=g[1];return[0,[0,q,p],[0,[0,r[1],r[2]],0]]}var
t=p,s=q}else{if(!g)return 0;var
u=g[1],t=u[2],s=u[1]}return[0,[0,s,t],0]}return[0,i[1],0]}return[0,h[1],0]}}return f(c)},ct],N=[0,[0,dz,kM],[0,y[1],y[2],y[3],y[4],y[5],y[6],y[7],y[8],y[9],y[10],y[11],y[12],y[13],y[14],y[15],y[16],y[17],y[18],y[19],y[20],y[21],y[22],y[23],y[24]],[0,lr,ln],bS,lE,fm,kX,fn];aw(616,N,"Micromega_plugin.Mfourier");var
lF=0,lG=n[13],lH=n[12][8],lJ=0;function
lK(b){return[1,a(i[8][1],b)]}var
dD=[0,i[7][2],lK,lJ,lI,lH,lG],lL=n[77],lM=n[80],lP=i[8][2],aU=[0,function(b){return[0,a(i[7][2],b),0]},lP,lO,lN,lM,lL];function
cu(e,c){function
d(c){switch(c[0]){case
0:var
g=a(e[2],c[1]);return a(l[2][1],g);case
1:var
h=a(i[8][3],c[1]);return a(l[2][2],h);case
2:var
j=c[1],k=d(c[2]),m=d(j);return b(l[2][3],m,k);case
3:var
n=c[1],o=d(c[2]),p=a(l[2][5],o),q=d(n);return b(l[2][3],q,p);case
4:var
r=c[2],s=d(c[1]),t=d(r);return b(l[2][4],s,t);case
5:var
u=d(c[1]);return a(l[2][5],u);default:var
v=c[2],w=d(c[1]),x=a(i[8][4],v),f=function(c){if(0===c){var
d=a(e[2],e[4]);return a(l[2][1],d)}var
g=f(c-1|0);return b(l[2][4],w,g)};return f(x)}}return d(c)}function
dE(b,f){var
c=f;for(;;){var
e=Y(n[74],b[3],b[4],b[5],b[6]),d=function(d){function
c(b){if(typeof
b!=="number")switch(b[0]){case
3:var
e=b[1],f=c(b[2]);return a(d,[3,c(e),f]);case
4:var
g=b[1],h=c(b[2]);return a(d,[4,c(g),h])}return a(d,b)}return c}(e)(c);if(ae(d,c))return d;var
c=d;continue}}var
dF=a(k[20][1],[0,l[1][6]]);function
lS(c){function
g(a){return a[1]}var
f=b(k[17][69],g,c),h=a(dF[5],l[1][2]);function
i(c,a){function
d(c,d,a){return b(dF[4],c,a)}return e(l[2][7],d,a,c)}var
j=e(k[17][15],i,h,f),n=0;function
o(d,q){var
h=0;function
i(c,a){return[0,b(l[2][6],d,a),c]}var
c=e(k[17][15],i,h,f);if(ae(d,l[1][2]))var
j=[1,m[1]],n=a(k[17][9],c),g=[0,a(l[3][10],[0,[1,m[2]],n]),0,j];else
var
o=[1,m[1]],p=a(k[17][9],c),g=[0,a(l[3][10],[0,[1,m[1]],p]),0,o];return[0,g,q]}var
p=e(dF[15],o,j,n),q=[1,m[2]],r=1;function
s(a){return 2===a[2]?[1,m[2]]:[1,m[1]]}var
t=b(k[17][69],s,c),u=[0,a(l[3][10],[0,[1,m[2]],t]),r,q];function
d(f,c){var
b=f,a=c;for(;;){if(a){if(0===a[1][2]){var
b=b+1|0,a=a[2];continue}var
g=d(b+1|0,a[2]),h=1,i=l[3][9],j=function(a){return lR};return[0,[0,e(l[3][8],b+1|0,j,i),h,lQ],g]}return 0}}var
v=[0,u,d(0,c)],w=b(k[18],v,p),x=[1,m[1]];return[0,[0,a(l[3][10],[0,[1,m[2]],0]),1,x],w]}function
fy(f,e){var
g=e[1],h=f[1],q=e[2];if(g){var
r=g[2],n=function(d,c){if(d){var
e=d[1],l=d[2];if(c){var
g=c[1],f=n(l,c[2]),k=b(m[23],e,m[1]);if(-1===k){var
o=[0,a(i[7][4],g)];return[4,[2,[0,a(h,e)],o],f]}if(0===k)return f;var
p=[0,a(i[7][4],g)];return[4,[3,[5,a(h,e)],p],f]}return a(j[3],lT)}return 0},s=dE(f,n(r,q)),l=function(p,o){var
f=p,d=o;for(;;){if(f){var
g=f[2],a=f[1];if(d){var
c=d[1];if(typeof
c==="number")var
b=0;else
switch(c[0]){case
2:if(typeof
a==="number")var
b=0;else
if(2===a[0]){var
h=c[1],j=a[2],k=c[2];if(ae(h,a[1]))var
e=[0,[2,h,[4,k,j]]],b=1;else
var
e=0,b=1}else
var
b=0;break;case
3:if(typeof
a==="number")var
b=0;else
if(3===a[0]){var
i=c[1],m=a[2],n=c[2];if(ae(i,a[1]))var
e=[0,[3,i,[4,n,m]]],b=1;else
var
e=0,b=1}else
var
b=0;break;default:var
b=0}if(!b)var
e=0;if(e){var
f=g,d=[0,e[1]];continue}return[4,c,l(g,[0,a])]}var
f=g,d=[0,a];continue}return d?d[1]:0}},c=s,d=0,p=0;for(;;){if(typeof
c!=="number"&&4===c[0]){var
o=[0,c[1],d],c=c[2],d=o;continue}return l(b(k[17][39],B.caml_compare,[0,c,d]),p)}}return a(j[3],lU)}var
fz=[a4,lV,a2(0)],aC=a(k[21][1],[0,l[1][6]]);function
lW(c){var
f=[0,0];function
p(b,a){return Z(b[1],a[1])}var
g=[0,aC[1],0];function
h(h,g){var
i=h[2],j=h[1],q=g[2],n=[0,g[1],0];function
o(g,j,i){var
h=i[2],c=i[1];if(ae(g,l[1][2]))return[0,c,h];try{var
q=b(aC[22],g,c),m=q,k=c}catch(a){a=u(a);if(a!==H)throw a;var
n=e(aC[4],g,f[1],c),o=f[1];f[1]++;var
m=o,k=n}var
p=0===a(d[25],j)?h:[0,[0,m,j],h];return[0,k,p]}var
c=e(l[2][7],o,j,n),r=c[2],s=c[1],t=b(l[2][6],l[1][2],j),v=a(d[3],t);if(0===i)var
m=0;else{if(!(3<=i))throw fz;var
m=1}return[0,s,[0,[0,b(k[17][39],p,r),m,v],q]]}return e(k[17][16],h,c,g)[2]}function
lX(e){try{var
f=lW(e),g=a(N[3][1],f);if(0===g[0])var
h=0;else
var
n=b(N[5][1],f,g[1]),o=a(k[17][5],n)[1],p=function(a){return[0,a[1]+1|0,a[2]]},q=b(k[17][69],p,o),r=a(l[3][11],q),h=[0,a(i[9],r)];return h}catch(b){b=u(b);if(b===fz){var
j=lS(e);try{var
c=a(N[3][1],j);if(0===c[0])var
m=a(l[3][11],c[1]),d=[0,a(i[9],m)];else
var
d=0;return d}catch(b){b=u(b);if(a(aT[18],b))return 0;throw b}}throw b}}function
lY(g,e){var
h=a(k[17][1],e)-1|0,i=b(lZ[53],0,h),l=b(k[17][124],e,i);function
m(a){return 1===a[1][2]?1:0}var
n=b(k[17][30],m,l)[2];function
o(b){var
c=b[1],d=c[2],e=b[2],f=c[1];return 1===d?a(j[3],l0):[0,[0,cu(g,f),d],e]}var
p=b(k[17][69],o,n),c=a(k[17][cU],p),f=c[2],d=lX(c[1]);return d?[0,[0,d[1],f]]:0}function
fA(c,b){try{var
e=lY(c,b);return e}catch(b){b=u(b);if(a(aT[18],b)){var
d=a(dn[1],b);a(j[31],d);return 0}throw b}}function
cv(e,c){var
d=a(k[17][1],e),f=b(j[6],c,cR(d,c));return b(j[6],d,f)}function
l1(d,b,a){var
e=cv(a,d);N[6][1]=e;var
c=fA(b,a);return c?[0,fy(b,c[1])]:0}function
l2(o,c){a(l[9][1][1],0);var
p=cv(c,o);N[6][1]=p;function
q(c,b){return[0,b,[0,a(i[7][4],c)]]}var
f=b(k[17][13],q,c);function
r(c,a){var
d=a[1],e=c[1],f=d[1],g=e[1],h=[3,c[2],a[2]];return[0,[0,[4,g,f],b(n[53],e[2],d[2])],h]}var
s=b(i[10],r,f),t=0;function
u(b,a){var
c=a[1],d=c[2],e=a[2],f=c[1];return d?[0,[0,[0,f,d[1]],e],b]:b}var
v=e(k[17][15],u,t,s),g=b(k[18],f,v);function
w(a){return cu(aU,a[1][1])}var
x=b(k[17][69],w,g),y=aC[1];function
z(c,b){function
d(c,f,b){var
d=a(l[1][3],c);return d?e(aC[4],d[1],c,b):b}return e(l[2][7],d,b,c)}var
A=e(k[17][15],z,y,x);function
h(b){var
c=[0,aU[4]];function
d(d,c,b){var
e=a(i[7][3],c);return[4,[6,[1,a(i[7][1],d)],e],b]}return e(l[1][1],d,b,c)}var
B=d9(n[63],aU[3],aU[4],n[79],n[80],n[82],n[81],n[77]),C=0;function
D(d,c,b){var
e=[1,a(B,h(d))];return[0,[0,[0,h(c),3],e],b]}var
E=e(aC[11],D,A,C),j=b(k[18],g,E);function
F(a){return a[1]}var
m=fA(aU,b(k[17][69],F,j));if(m){var
G=fy(aU,m[1]),d=function(c){if(typeof
c==="number")return 0;else
switch(c[0]){case
0:var
e=a(i[8][5],c[1]);return b(k[17][7],j,e)[2];case
1:return[1,c[1]];case
2:var
f=c[1];return[2,f,d(c[2])];case
3:var
g=c[1],h=d(c[2]);return[3,d(g),h];case
4:var
l=c[1],m=d(c[2]);return[4,d(l),m];default:return[5,c[1]]}};return[0,d(G)]}return 0}function
fB(b,a){var
c=a[2],d=a[1];if(0===c)return[0,cu(b,d),0];if(3<=c)return[0,cu(b,d),1];throw[0,ao,l3]}function
bc(c){if(typeof
c==="number")return[0,m[2],0];else
switch(c[0]){case
0:var
e=c[1],z=[0,[1,a(i[1],e)]];return[0,a(i[2],e),z];case
1:return[0,m[2],[1,c[1]]];case
2:return a(j[3],l4);case
3:var
f=bc(c[1]);return[0,f[1],[3,f[2]]];case
4:var
g=c[1],A=g[2],h=bc(g[1]),k=h[2],l=h[1],n=bc(A),o=n[2],p=n[1],d=b(m[17],l,p),q=b(m[15],l,d),r=b(m[15],p,d),B=b(m[10],q,r),s=b(m[10],d,B);return 0===b(m[23],s,m[2])?[0,m[2],[4,[0,k,o]]]:[0,s,[4,[0,[6,[0,[0,[1,r]],k]],[6,[0,[0,[1,q]],o]]]]];case
5:return a(j[3],l5);case
6:var
t=c[1],C=t[2],u=bc(t[1]),D=u[2],E=u[1],v=bc(C),F=[6,[0,D,v[2]]];return[0,b(m[10],E,v[1]),F];case
7:return a(j[3],l6);default:var
w=c[1],x=w[2],y=bc(w[1]),G=[8,[0,y[2],x]];return[0,b(m[19],y[1],x),G]}}function
fC(b){var
a=bc(b);return[0,a[1],a[2]]}function
bq(c){switch(c[0]){case
0:return[0,m[2],[0,c[1]]];case
1:return[0,m[2],[1,c[1]]];case
2:return[0,m[2],[2,c[1]]];case
3:var
e=c[1],v=[3,[1,a(i[1],e)]];return[0,a(i[2],e),v];case
4:var
f=c[1],w=[4,[1,a(i[1],f)]];return[0,a(i[2],f),w];case
5:var
g=c[1],x=[5,[1,a(i[1],g)]];return[0,a(i[2],g),x];case
6:var
h=fC(c[1]),j=h[1],y=[6,h[2]];return[0,b(m[10],j,j),y];case
7:return[0,m[2],[7,c[1]]];case
8:var
z=c[2],k=fC(c[1]),A=k[2],B=k[1],l=bq(z),C=[8,A,l[2]];return[0,b(m[10],B,l[1]),C];case
9:var
D=c[2],n=bq(c[1]),o=n[1],E=n[2],p=bq(D),q=p[1],F=p[2],d=b(m[17],o,q),r=b(m[15],o,d),s=b(m[15],q,d),G=b(m[10],r,s);return[0,b(m[10],d,G),[9,[10,[4,[1,s]],E],[10,[4,[1,r]],F]]];default:var
H=c[2],t=bq(c[1]),I=t[2],J=t[1],u=bq(H),K=[10,I,u[2]];return[0,b(m[10],J,u[1]),K]}}function
aD(b){if(typeof
b==="number")return[0,a(i[7][5],l7)];else
switch(b[0]){case
0:return[0,a(i[7][5],b[1])];case
1:var
c=b[1],l=gO(e(k[15][4],c,1,gN(c)-1|0));return[1,a(i[7][6],l)];case
3:return[5,aD(b[1])];case
4:var
d=b[1],m=d[1],n=aD(d[2]);return[2,aD(m),n];case
5:var
f=b[1],o=f[1],p=aD(f[2]);return[3,aD(o),p];case
6:var
g=b[1],q=g[1],r=aD(g[2]);return[4,aD(q),r];case
8:var
h=b[1],s=h[1],t=a(i[7][3],h[2]);return[6,aD(s),t];default:return a(j[3],l8)}}function
fD(b){var
c=aD(b),d=n[77],e=n[81],f=n[82],g=n[80],h=n[79],j=a(i[7][5],l9),k=a(i[7][5],l_);return cS(n[39],k,j,h,g,f,e,d,c)}function
dG(b){if(b){var
c=b[2],d=b[1];if(c){var
e=dG(c);return[3,[0,a(i[7][4],d)],e]}return[0,a(i[7][4],d)]}return 0}function
l$(c){function
e(c){switch(c[0]){case
0:return[0,a(i[7][4],c[1])];case
1:return[0,a(i[7][4],c[1])];case
2:return[0,a(i[7][4],c[1])];case
6:return[1,fD(c[1])];case
7:return dG(c[1]);case
8:var
g=c[1],h=e(c[2]);return[2,fD(g),h];case
9:var
j=c[1],k=e(c[2]);return[4,e(j),k];case
10:var
l=c[1],m=e(c[2]);return[3,e(l),m];default:var
f=c[1];return 0===b(d[37],f,ma)?0:[5,a(i[7][5],f)]}}return dE(aU,e(c))}function
aE(b){if(typeof
b==="number")return mb;else
switch(b[0]){case
0:var
m=a(d[52],b[1]);return[0,a(i[7][2],m)];case
1:var
c=b[1],n=gO(e(k[15][4],c,1,gN(c)-1|0));return[1,a(i[7][6],n)];case
3:return[5,aE(b[1])];case
4:var
f=b[1],o=f[1],p=aE(f[2]);return[2,aE(o),p];case
5:var
g=b[1],q=g[1],r=aE(g[2]);return[3,aE(q),r];case
6:var
h=b[1],s=h[1],t=aE(h[2]);return[4,aE(s),t];case
8:var
l=b[1],u=l[1],v=a(i[7][3],l[2]);return[6,aE(u),v];default:return a(j[3],mc)}}function
fE(b){var
c=aE(b),d=n[13],e=n[12][6],f=n[12][7],g=n[12][8],h=n[12][5],j=a(i[7][7],1),k=a(i[7][7],0);return cS(n[39],k,j,h,g,f,e,d,c)}function
md(c){var
f=bq(c)[2];function
e(l){var
c=l;for(;;)switch(c[0]){case
0:return[0,a(i[7][4],c[1])];case
1:return[0,a(i[7][4],c[1])];case
2:return[0,a(i[7][4],c[1])];case
6:return[1,fE(c[1])];case
7:return dG(c[1]);case
8:var
j=c[2],f=c[1];if(typeof
f==="number")var
g=0;else
if(0===f[0])var
k=b(d[26],f[1],mf),g=1;else
var
g=0;if(!g)var
k=0;if(k){var
c=j;continue}var
n=e(j);return[2,fE(f),n];case
9:var
o=c[1],p=e(c[2]);return[4,e(o),p];case
10:var
q=c[1],r=e(c[2]);return[3,e(q),r];default:var
h=c[1];if(0===b(d[37],h,me))return 0;var
m=a(d[52],h);return[5,a(i[7][2],m)]}}return dE(dD,e(f))}function
fF(b){var
c=b[1],d=a(i[1],b[2]),f=[0,a(i[7][2],d)];function
g(f,b){var
g=b[2],h=a(l[9][1][2],b[1]);function
c(d,c,b){var
e=a(i[7][3],c);return[4,[6,[1,a(i[7][1],d)],e],b]}var
d=e(l[1][1],c,h,mh),j=a(i[1],g);return[2,[4,[0,a(i[7][2],j)],d],f]}return e(k[17][15],g,f,c)}function
aF(c,b){if(typeof
b==="number")return 0;else
switch(b[0]){case
2:return[5,a(i[7][2],b[1])];case
3:var
k=fF(b[1]);return[1,a(n[92],k)];case
4:var
l=b[2],m=fF(b[1]),o=a(n[92],m);return[2,o,aF(c,l)];case
6:var
p=b[1],q=aF(c,b[2]);return[3,aF(c,p),q];case
7:var
r=b[1],s=aF(c,b[2]);return[4,aF(c,r),s];case
0:case
1:var
e=0,d=c,h=b[1];for(;;){if(d){var
g=d[2];if(!ae(h,d[1])){var
e=e+1|0,d=g;continue}var
f=e}else
var
f=a(j[3],mg);return[0,a(i[7][4],f)]}default:return a(j[3],mi)}}function
cw(c,a){if(typeof
a==="number")return 0;else{if(0===a[0]){var
e=a[3],d=a[2],f=a[1];if(typeof
d!=="number"&&8===d[0]){var
h=d[1],i=cw([0,f,c],e);return[1,aF(c,h),i]}var
g=cw([0,f,c],e);return[0,aF(c,d),g]}var
j=a[5],l=a[4],m=a[2],n=[0,a[1],c],o=function(a){return cw(n,a)},p=b(k[17][69],o,j),q=aF(c,l);return[2,aF(c,m),q,p]}}function
mj(d,c){var
e=1+a(l[4],c)|0;return cw(d,b(l[5],e,c)[2])}function
dH(c){var
d=a(N[3][1],c);if(0===d[0])return 0;var
e=b(N[5][1],c,d[1]),f=a(k[17][5],e)[1],g=a(l[3][11],f);return[0,a(i[9],g)]}function
dI(g,f){var
e=0,d=g,c=f;for(;;){if(c){if(d){var
h=c[2],i=d[2],k=b(l[8],c[1],d[1]),e=b(l[7],k,e),d=i,c=h;continue}return a(j[3],mk)}return e}}function
ml(d){var
b=a(k[17][cU],d),e=b[2],c=dH(b[1]);return c?[0,dI(e,c[1])]:0}function
fG(m){var
f=m[2],g=m[1],h=g[3],j=g[2],l=g[1];if(l){var
o=function(a){return a[2]},p=b(k[17][69],o,l),n=a(i[14],p),c=[1,n];if(b(d[32],c,mm))return[2,g,f];var
q=b(d[12],h,c);if(0===a(d[25],q)){if(1<=a(d[25],c)){var
r=b(d[9],h,c),s=function(a){var
e=a[1];return[0,e,b(d[9],a[2],c)]};return[2,[0,b(k[17][69],s,l),j,r],[5,n,f]]}throw[0,ao,mn]}if(0===j)return[0,[8,f]];var
t=b(d[9],h,c),u=a(d[24],t),v=function(a){var
e=a[1];return[0,e,b(d[9],a[2],c)]};return[1,[0,b(k[17][69],v,l),j,u],[8,f]]}return e(N[7],j,mo,h)?0:[0,f]}var
cx=[a4,mp,a2(0)];function
mq(a){var
b=0;function
c(b,c){var
a=fG([0,c[1],c[2]]);if(typeof
a==="number")return b;else
switch(a[0]){case
0:throw[0,cx,a[1]];case
1:return[0,[0,a[1],a[2]],b];default:return[0,[0,a[1],a[2]],b]}}return e(k[17][15],c,b,a)}function
dJ(g,c){if(0===a(m[22],c))return[0,m[2],m[1]];var
d=b(m[14],g,c),h=d[1],e=dJ(c,d[2]),f=e[2],i=e[1],j=b(m[10],h,f);return[0,f,b(m[8],i,j)]}function
dK(f,b){var
c=0;function
d(c,d){var
e=a(f,d);if(e){var
b=fG(e[1]);if(typeof
b==="number")return c;else
switch(b[0]){case
0:throw[0,cx,b[1]];case
1:return[0,[0,b[1],b[2]],c];default:return[0,[0,b[1],b[2]],c]}}return[0,d,c]}return e(k[17][15],d,c,b)}function
fH(r,q,c){return dK(function(s){var
f=s[1],g=q[1],j=f[2],k=f[1],m=g[2],n=g[1],t=s[2],u=q[2],v=f[3],w=g[3];function
h(e,c){var
f=a(i[1],c),g=b(l[8],f,t),h=a(i[1],e),o=[7,b(l[8],h,u),g],p=b(d[6],v,c),q=b(d[6],w,e),r=b(d[1],q,p),s=b(N[5][2],m,j),x=b(l[3][13],c,k),y=b(l[3][13],e,n);return[0,[0,b(l[3][12],y,x),s,r],o]}var
o=b(l[3][5],r,n),p=b(l[3][5],r,k);if(o)if(p){var
c=p[1],e=o[1],x=a(d[25],c);if(-1===cR(a(d[25],e),x)){var
y=a(d[15],c);return[0,h(y,a(d[15],e))]}if(0===m){var
z=[0,a(d[25],e)],A=b(d[6],c,z),B=a(d[3],A);return[0,h(B,a(d[15],e))]}if(0===j){var
C=a(d[15],c),D=[0,a(d[25],c)],E=b(d[6],e,D);return[0,h(C,a(d[3],E))]}return 0}return 0},c)}function
mr(D){var
e=0,c=D;for(;;){if(c){var
q=c[2],f=c[1],A=function(v){return function(u){var
f=u[1],g=v[1];if(0===g[2])if(0===f[2]){var
d=g[1],c=f[1];for(;;){if(d)if(c){var
h=c[2],j=c[1],k=j[2],l=j[1],n=d[2],o=d[1],p=o[2],e=o[1];if(ae(e,l)){var
q=m[2],r=a(i[1],k),s=a(i[1],p),t=b(m[17],s,r);if(0===b(m[23],t,q))return[0,[0,e,p,k]];var
d=n,c=h;continue}if(d8(e,l)){var
d=n;continue}var
c=h;continue}return 0}}return 0}}(f),r=b(i[15],A,q),s=r[1];if(!s){var
e=[0,f,e],c=q;continue}var
t=s[1],B=t[2],C=t[1],g=[0,[0,[0,C,f,B]],b(k[17][10],e,r[2])]}else
var
g=[0,0,e];var
u=g[1],E=g[2];if(u){var
h=u[1],v=h[3],w=v[1],x=h[2],y=x[2],j=x[1],n=h[1],F=v[2],G=n[2],H=n[1],I=a(i[1],n[3]),z=dJ(a(i[1],G),I),o=[1,z[1]],p=[1,z[2]],J=b(d[6],p,w[3]),K=b(d[6],o,j[3]),L=b(d[1],K,J),M=b(l[3][13],p,w[1]),N=b(l[3][13],o,j[1]),O=[0,b(l[3][12],N,M),0,L],P=a(i[1],p),Q=b(l[8],P,F),R=a(i[1],o),S=b(l[8],R,y);return[0,fH(H,[0,O,b(l[7],S,Q)],[0,[0,j,y],E])]}return 0}}function
ms(f){function
g(c){var
a=c[1];if(0===a[2])try{var
e=a[1],f=function(e){var
a=e[2],c=b(d[26],a,mt);return c?c:b(d[26],a,mu)},g=[0,b(k[17][27],f,e)[1]];return g}catch(a){a=u(a);if(a===H)return 0;throw a}return 0}var
a=b(i[15],g,f),c=a[1],h=a[2];if(c){var
e=c[1];return[0,fH(e[1],e[2],h)]}return 0}function
mv(g){function
h(f){var
c=f[1];if(0===c[2])try{var
g=c[1],h=function(c){var
e=c[2],g=c[1],h=b(d[26],e,mw),f=h||b(d[26],e,mx);if(f){var
i=a(l[9][1][2],g);return a(l[1][4],i)}return f},e=b(k[17][27],h,g)[1],i=a(l[9][1][2],e),j=c[1],m=function(g){var
c=g[1],d=c===e?1:0;if(d)var
f=d;else
var
h=a(l[9][1][2],c),f=0===b(l[1][5],h,i)[2]?1:0;return f},n=b(k[17][21],m,j)?[0,e]:0;return n}catch(a){a=u(a);if(a===H)return 0;throw a}return 0}var
c=b(i[15],h,g),e=c[1],j=c[2];if(e){var
f=e[1];return[0,dK(b(l[9][2],f[1],f[2]),j)]}return 0}function
my(r){function
s(h){var
c=h;for(;;){if(c){var
d=c[2],e=c[1],j=e[1],f=a(i[1],e[2]);try{var
l=function(g){return function(c){var
d=a(i[1],c[2]),e=m[2],f=b(m[17],g,d);return b(m[24],f,e)}}(f),g=b(k[17][27],l,d),n=g[1],o=[0,[0,[0,j,f],[0,n,a(i[1],g[2])]]];return o}catch(a){a=u(a);if(a===H){var
c=d;continue}throw a}}return 0}}function
t(b){var
a=b[1];return 0===a[2]?s(a[1]):0}var
c=b(i[15],t,r),e=c[1],v=c[2];if(e){var
f=e[1],g=f[2],h=g[1],j=f[1],n=j[2],o=j[1],w=g[2],x=n[1],y=o[1],p=dJ(o[2],n[2]),z=[1,p[2]],A=[1,p[1]],q=function(d,c){var
a=b(l[3][5],d,c);return a?a[1]:mz};return[0,dK(function(g){var
c=g[1],e=c[1],i=g[2],j=c[3],k=c[2],m=q(y,e),n=q(x,e),o=b(d[6],n,z),p=b(d[6],m,A),r=b(d[1],p,o),f=a(d[3],r),s=b(d[6],f,h[3]),t=b(d[1],s,j),u=b(l[3][13],f,h[1]);return[0,[0,[0,b(l[3][12],u,e),k,t],[7,[4,[0,0,f],w],i]]]},v)]}return 0}function
fI(e,d){var
b=d;for(;;){var
c=a(e,b);if(c){var
b=c[1];continue}return b}}function
fJ(e,d){var
b=e;for(;;){if(b){var
f=b[2],c=a(b[1],d);if(c)return[0,c[1]];var
b=f;continue}return 0}}function
fK(a){var
b=[0,ms,[0,mr,[0,my,0]]];return fI(function(a){return fJ(b,a)},a)}function
mA(a){var
b=[0,mv,0];return fI(function(a){return fJ(b,a)},a)}function
dL(c){function
e(c){var
e=c[1][1];function
f(b){return 0!==a(d[25],b[2])?1:0}return b(k[17][21],f,e)}return b(k[17][21],e,c)}function
fL(o,n,c){function
p(G,q){if(dL(q)){var
H=a(k[17][cU],q),I=H[2],f=H[1],L=function(a){return 0===a[2]?1:0},v=b(k[17][30],L,f),w=v[2],x=v[1];if(x)var
M=0,O=function(c,a){function
d(c){return b(l[3][2],a[1],c[1])}return b(k[17][22],d,x)?c:[0,a[1],c]},y=e(k[17][15],O,M,w);else
var
P=function(a){return a[1]},y=b(k[17][14],P,w);var
Q=[0,l[3][9],mC],R=function(c,h){var
e=a(N[1][1],c[2]),l=e?b(d[29],e[1],mB):0;if(l)return c;var
i=b(N[3][2],h,f);if(i){var
j=i[1],g=c[2],k=c[1];return b(N[1][2],j,g)?[0,h,j]:[0,k,g]}return c},z=e(k[17][15],R,Q,y),A=z[2],B=A[1],S=z[1];if(B){var
C=A[2];if(C)var
g=[0,[0,B[1],S,C[1]]],t=1;else
var
t=0}else
var
t=0;if(!t)var
g=0;if(g){var
h=g[1],n=h[3],o=h[2],p=h[1],T=a(i[2],p),U=m[2],V=a(i[1],p),W=b(m[8],V,U),X=a(i[2],n),Y=a(i[1],n),Z=[1,b(m[5],m[2],Y)],D=dH([0,[0,b(l[3][13],[1,X],o),1,Z],f]),_=a(d[3],[1,W]),$=a(d[3],[1,T]),E=dH([0,[0,b(l[3][13],$,o),1,_],f]);if(D)if(E)var
aa=E[1],ab=a(k[17][6],D[1]),c=[0,[0,a(k[17][6],aa),[0,p,o,n],ab]],u=1;else
var
u=0;else
var
u=0;if(!u)var
c=a(j[3],mD)}else
var
c=0;if(c){var
r=c[1],s=r[2],J=s[2],ac=r[3],ad=s[1],ae=r[1],af=a(d[22],s[3]),K=F(G,J,a(d[24],ad),af,q);if(K){var
ag=K[1],ah=dI(I,ac);return[0,[1,G,dI(I,ae),J,ah,ag]]}return 0}return 0}throw[0,ao,mE]}function
F(c,h,a,f,e){if(b(d[28],a,f))return mF;var
i=g(c+1|0,[0,[0,[0,h,0,a],[1,c]],e]);if(i){var
k=i[1],j=F(c,h,b(d[1],a,mG),f,e);return j?[0,[0,k,j[1]]]:0}return 0}function
g(b,c){if(dL(c))try{var
d=a(n,c),e=ml(d),f=e?[0,[0,b,e[1],0]]:o?p(b,d):0;return f}catch(a){a=u(a);if(a[1]===cx)return[0,[0,b,a[2],0]];throw a}throw[0,ao,mH]}var
h=a(k[17][1],c);try{var
s=g(h,mq(c)),f=s}catch(a){a=u(a);if(a[1]!==cx)throw a;var
f=[0,[0,h,a[2],0]]}if(f){var
q=f[1],r=function(a,b){return a};return[0,mj(b(k[17][13],r,c),q)]}return 0}function
fM(b){var
e=b[2],c=a(l[9][3],b[1]),f=c[1];return[0,f,e,a(d[3],c[2])]}function
mI(e,d,c){a(l[9][1][1],0);var
f=cv(c,d);N[6][1]=f;function
g(a){return fB(dD,a)}var
h=b(k[17][69],g,c),i=b(k[17][69],fM,h);function
j(b,a){return[0,a,[0,b]]}return fL(e,fK,b(k[17][13],j,i))}var
ap=[0,lF,l$,md,mI,function(n,m,f){a(l[9][1][1],0);var
o=cv(f,m);N[6][1]=o;function
p(a){return fB(dD,a)}var
q=b(k[17][69],p,f);function
r(b,a){return[0,a,[0,b]]}var
c=b(k[17][13],r,q);function
s(b){return a(l[2][8],b[1][1])}var
g=b(k[17][21],s,c),t=aC[1];function
u(c,b){var
d=b[1][1];function
f(c,f,b){var
d=a(l[1][3],c);return d?e(aC[4],d[1],c,b):b}return e(l[2][7],f,d,c)}var
v=e(k[17][15],u,t,c);function
w(d,c,b){var
f=a(l[2][1],mJ),g=e(l[2][9],d,mK,f),h=a(l[9][3],g),i=a(l[2][1],mL);return[0,[0,[0,e(l[2][9],c,mM,i),1],[3,h]],b]}var
d=e(aC[11],w,v,c);if(g)var
h=d;else
var
z=function(c,a){var
d=a[1],e=c[1],f=d[1],g=e[1],h=[6,c[2],a[2]],i=b(l[11],e[2],d[2]);return[0,[0,b(l[2][4],g,f),i],h]},A=b(i[11],z,d),h=b(k[18],d,A);function
x(a){var
b=a[2];return[0,fM(a[1]),b]}var
j=b(k[17][69],x,h);if(dL(j)){var
y=g?fK:mA;return fL(n,y,j)}throw[0,ao,mN]},l2,l1,aU];aw(618,ap,"Micromega_plugin.Certificate");var
bT=[0,function(m){var
c=a(ba[25],m),l=[a4,mO,a2(0)],f=[a4,mP,a2(0)];function
n(d,b){var
f=a(c[1],d),g=e(A[23],b,mQ,cW);return[0,a(A[31],g),1,f]}function
o(b,c){try{var
d=a(b,0);a(c,0);return d}catch(b){b=u(b);try{a(c,0)}catch(a){throw b}throw b}}function
p(b){try{var
c=[0,a(cj[3],b)];return c}catch(b){b=u(b);if(b===mR)return 0;if(a(aT[18],b))throw l;throw b}}function
q(c,a){var
d=e(A[34],a,0,1);try{e(A[34],a,0,0);var
f=0===c?4:1;e(A[83],a,f,1);var
g=1,b=g}catch(a){a=u(a);if(a[1]!==A[1])throw a;var
b=0}e(A[34],a,d,0);return b}function
r(a){var
c=e(A[34],a,0,1);try{e(A[34],a,0,0);var
b=e(A[83],a,0,1);return b}catch(b){b=u(b);if(b[1]===A[1]){e(A[34],a,c,0);return 0}throw b}}function
g(d,c,b){return q(d,c)?o(b,function(a){return r(c)}):a(b,0)}function
d(h){var
f=e(A[23],h,mS,cW),i=a(A[30],f),d=a(c[1],100);function
n(f){for(;;){var
a=p(i);if(a){var
b=a[1];e(c[10],d,b[1],b[2]);continue}return 0}}try{g(0,f,n);a(j[83],i);var
o=e(A[23],h,mV,cW),q=[0,a(A[31],o),1,d];return q}catch(f){f=u(f);if(f===l){a(j[83],i);var
m=e(A[23],h,mT,cW),k=a(A[31],m);g(1,m,function(g){function
f(b,a){return e(cj[1],k,[0,b,a],mU)}b(c[12],f,d);return a(j[52],k)});return[0,k,1,d]}throw f}}function
s(b){var
d=b[1],e=b[3];return 0===b[2]?0:(a(j[65],d),a(c[2],e),b[2]=0,0)}function
i(b,i,h){var
d=b[1],k=b[3];if(0===b[2])throw f;var
l=a(A[33],d);e(c[10],k,i,h);return g(1,l,function(b){e(cj[1],d,[0,i,h],mW);return a(j[52],d)})}function
k(a,d){var
e=a[3];if(0===a[2])throw f;return b(c[7],e,d)}return[0,n,d,k,i,s,function(c,e){var
b=[h,function(b){try{var
a=[0,d(c)];return a}catch(a){return 0}}];return function(c){var
d=gP(b),f=hc===d?b[1]:h===d?a(fN[2],b):b;if(f){var
g=f[1];try{var
l=k(g,c);return l}catch(b){b=u(b);if(b===H){var
j=a(e,c);i(g,c,j);return j}throw b}}return a(e,c)}}]}];aw(621,bT,"Micromega_plugin.Persistent_cache");function
f(b){var
c=gP(b);return hc===c?b[1]:h===c?a(fN[2],b):b}var
dM=j[8],fO=[0,dM],dN=[0,1],fP=[0,dM];function
fQ(a){return[0,dN[1],fP[1]]}function
dO(a){return fO[1]}function
fR(b,a){function
c(b){var
c=b?b[1]:dM;a[1]=c;return 0}function
d(b){return[0,a[1]]}return[0,0,e(o[21],j[17],b,mX),b,d,c]}function
mY(a){dN[1]=a;return 0}var
m1=[0,0,m0,mZ,function(a){return dN[1]},mY],m3=fR(m2,fO);b(dP[3],0,m3);var
m5=fR(m4,fP);b(dP[3],0,m5);b(dP[4],0,m1);function
aG(c,b){if(typeof
b==="number")return 0===b?0:1;else
switch(b[0]){case
0:return[0,b[1]];case
1:var
d=b[3],e=b[2];return[1,a(c,b[1]),e,d];case
2:var
f=b[1],g=aG(c,b[2]);return[2,aG(c,f),g];case
3:var
h=b[1],i=aG(c,b[2]);return[3,aG(c,h),i];case
4:return[4,aG(c,b[1])];default:var
j=b[2],k=b[1],l=aG(c,b[3]);return[5,aG(c,k),j,l]}}function
aW(c,b){if(typeof
b==="number")return 0===b?0:1;else
switch(b[0]){case
0:return[0,a(c,b[1])];case
1:return[1,b[1],b[2],b[3]];case
2:var
d=b[1],e=aW(c,b[2]);return[2,aW(c,d),e];case
3:var
f=b[1],g=aW(c,b[2]);return[3,aW(c,f),g];case
4:return[4,aW(c,b[1])];default:var
h=b[2],i=b[1],j=aW(c,b[3]);return[5,aW(c,i),h,j]}}function
fS(a){if(typeof
a!=="number"&&5===a[0]){var
b=a[2];if(b){var
c=b[1];return[0,c,fS(a[3])]}}return 0}var
dQ=0;function
fT(I,H,l,k,c){function
h(c,a){return b(j[26],c,a)}function
i(c,e){if(e){var
h=e[2],d=e[1],j=b(k,c[1],d[1]);if(j){if(a(l,j[1]))return[0,[0,c[2],[0,d[2],0]]];var
f=i(c,h);return 0===f[0]?[0,f[1]]:[1,[0,d,f[1]]]}var
g=i(c,h);return 0===g[0]?[0,g[1]]:[1,[0,d,g[1]]]}var
m=b(k,c[1],c[1]);return m?a(l,m[1])?[0,[0,c[2],0]]:[1,[0,c,0]]:[1,[0,c,0]]}function
g(a,d){if(a){var
m=a[1],f=g(a[2],d),k=f[2],l=f[1],h=function(l,f){var
g=f[2],h=f[1],a=m,d=l;for(;;){if(a){var
k=a[2],e=i(a[1],d);if(0!==e[0]){var
a=k,d=e[1];continue}var
c=[0,e[1]]}else
var
c=[1,d];return 0===c[0]?[0,h,b(j[26],g,c[1])]:[0,[0,c[1],h],g]}},c=e(o[21],h,d,m6),n=c[1],p=b(j[26],k,c[2]);return[0,b(j[26],l,n),p]}return[0,dQ,0]}function
f(O,N){var
c=O,d=N;for(;;)if(typeof
d==="number")return 0===d?c?[0,dQ,0]:[0,cy,0]:c?[0,cy,0]:[0,dQ,0];else
switch(d[0]){case
0:return c?[0,cy,0]:[0,cy,0];case
1:var
e=d[2],i=d[1],P=0;if(c)var
L=a(H,i),M=function(a){function
c(a){return[0,a,e]}return b(o[17],c,a)},k=b(o[17],M,L);else
var
J=a(I,i),K=function(a){function
c(a){return[0,a,e]}return b(o[17],c,a)},k=b(o[17],K,J);return[0,k,P];case
2:var
Q=d[2],l=f(c,d[1]),m=l[2],n=l[1],p=f(c,Q),q=p[2],r=p[1];if(c){var
R=b(j[26],m,q);return[0,h(n,r),R]}var
s=g(n,r),S=s[1],T=b(j[26],q,s[2]);return[0,S,b(j[26],m,T)];case
3:var
U=d[2],t=f(c,d[1]),u=t[2],v=t[1],w=f(c,U),x=w[2],y=w[1];if(c){var
z=g(v,y),V=z[1],W=b(j[26],x,z[2]);return[0,V,b(j[26],u,W)]}var
X=b(j[26],u,x);return[0,h(v,y),X];case
4:var
c=1-c,d=d[1];continue;default:var
Y=d[3],A=f(1-c,d[1]),B=A[2],C=A[1],D=f(c,Y),E=D[2],F=D[1];if(c){var
G=g(C,F),Z=G[1],_=b(j[26],E,G[2]);return[0,Z,b(j[26],B,_)]}var
$=b(j[26],B,E);return[0,h(C,F),$]}}return f(1,c)}var
ah=a(e4[1],[0,Z]),m8=b(j[26],bU[6],fU),m9=b(j[26],bU[5],m8),m_=b(j[26],[0,m7,0],m9),m$=b(j[26],bU[7],m_);function
F(d,c,b){var
f=e(bU[4],d,c,b),h=a(nd[21],f);return a(g[8],h)}var
ne=bU[7];function
aH(a){return F(nf,ne,a)}function
s(a){return F(ng,m$,a)}function
aI(a){return F(nh,na,a)}function
ai(a){return F(ni,nb,a)}function
aJ(a){return F(nj,nc,a)}function
aK(a){return F(nk,fU,a)}var
dR=[h,function(a){return aH(nl)}],dS=[h,function(a){return aH(nm)}],fV=[h,function(a){return aH(nn)}],np=[h,function(a){return aH(no)}],fW=[h,function(a){return aH(nq)}],dT=[h,function(a){return aH(nr)}],nt=[h,function(a){return s(ns)}],nv=[h,function(a){return s(nu)}],fX=[h,function(a){return s(nw)}],ny=[h,function(a){return aH(nx)}],nA=[h,function(a){return aH(nz)}],nC=[h,function(a){return aI(nB)}],nE=[h,function(a){return aI(nD)}],nG=[h,function(a){return aI(nF)}],nI=[h,function(a){return aI(nH)}],nK=[h,function(a){return aI(nJ)}],aX=[h,function(a){return aI(nL)}],nN=[h,function(a){return aI(nM)}],nP=[h,function(a){return aI(nO)}],nR=[h,function(a){return aI(nQ)}],bV=[h,function(a){return s(nS)}],cz=[h,function(a){return s(nT)}],fY=[h,function(a){return s(nU)}],fZ=[h,function(a){return s(nV)}],nX=[h,function(a){return aK(nW)}],nZ=[h,function(a){return aK(nY)}],n1=[h,function(a){return aK(n0)}],n3=[h,function(a){return aK(n2)}],n5=[h,function(a){return aK(n4)}],n7=[h,function(a){return aK(n6)}],n9=[h,function(a){return aK(n8)}],n$=[h,function(a){return aK(n_)}],ob=[h,function(a){return aK(oa)}],f0=[h,function(a){return s(oc)}],f1=[h,function(a){return s(od)}],f2=[h,function(a){return s(oe)}],og=[h,function(a){return s(of)}],oi=[h,function(a){return s(oh)}],ok=[h,function(a){return s(oj)}],om=[h,function(a){return s(ol)}],oo=[h,function(a){return aJ(on)}],oq=[h,function(a){return aJ(op)}],os=[h,function(a){return aJ(or)}],ou=[h,function(a){return aJ(ot)}],dU=[h,function(a){return aH(ov)}],f3=[h,function(a){return aJ(ow)}],f4=[h,function(a){return aJ(ox)}],f5=[h,function(a){return aJ(oy)}],f6=[h,function(a){return aJ(oz)}],f7=[h,function(a){return aJ(oA)}],oC=[h,function(a){return s(oB)}],oE=[h,function(a){return s(oD)}],oG=[h,function(a){return s(oF)}],f8=[h,function(a){return s(oH)}],f9=[h,function(a){return s(oI)}],f_=[h,function(a){return s(oJ)}],f$=[h,function(a){return s(oK)}],ga=[h,function(a){return s(oL)}],oN=[h,function(a){return ai(oM)}],oP=[h,function(a){return ai(oO)}],oR=[h,function(a){return ai(oQ)}],oT=[h,function(a){return ai(oS)}],cA=[h,function(a){return ai(oU)}],cB=[h,function(a){return ai(oV)}],dV=[h,function(a){return ai(oW)}],cC=[h,function(a){return ai(oX)}],gb=[h,function(a){return ai(oY)}],gc=[h,function(a){return ai(oZ)}],gd=[h,function(a){return ai(o0)}],ge=[h,function(a){return ai(o1)}],o3=[h,function(a){return s(o2)}],o5=[h,function(a){return s(o4)}],o7=[h,function(a){return s(o6)}],o9=[h,function(a){return s(o8)}],o$=[h,function(a){return s(o_)}],pb=[h,function(a){return s(pa)}],pd=[h,function(a){return s(pc)}],pf=[h,function(a){return s(pe)}],ph=[h,function(a){return s(pg)}],pj=[h,function(a){return s(pi)}],pl=[h,function(a){return s(pk)}],pn=[h,function(a){return s(pm)}],pp=[h,function(a){return s(po)}],pr=[h,function(a){return s(pq)}],pt=[h,function(a){return s(ps)}],pv=[h,function(a){return s(pu)}],px=[h,function(a){return s(pw)}],pz=[h,function(a){return s(py)}],pB=[h,function(a){return s(pA)}],pD=[h,function(a){return s(pC)}],pF=[h,function(a){return s(pE)}],pH=[h,function(a){return s(pG)}],pJ=[h,function(a){return s(pI)}],pN=[h,function(a){return F(pM,pL,pK)}],pR=[h,function(a){return F(pQ,pP,pO)}],pV=[h,function(a){return F(pU,pT,pS)}],pZ=[h,function(a){return F(pY,pX,pW)}],p3=[h,function(a){return F(p2,p1,p0)}],p7=[h,function(a){return F(p6,p5,p4)}],p$=[h,function(a){return F(p_,p9,p8)}],qd=[h,function(a){return F(qc,qb,qa)}],gf=[h,function(a){return F(qg,qf,qe)}],dW=[h,function(a){return F(qj,qi,qh)}],qn=[h,function(a){return F(qm,ql,qk)}],gg=[h,function(a){return F(qq,qp,qo)}],I=[a4,qr,a2(0)];function
dX(c,e){var
a=b(g[3],c,e);switch(a[0]){case
9:var
f=a[2],d=b(g[3],c,a[1]);if(12===d[0])return[0,d[1][1][2],f];throw I;case
12:return[0,a[1][1][2],[0]];default:throw I}}function
gh(a,d){var
b=dX(a,d),c=b[1],e=b[2];if(1===c)return 0;if(2===c)return[0,gh(a,z(e,0)[1])];throw I}function
qs(c,b){var
d=a(i[8][5],b);return e(p[1],c,qt,d)}function
dY(b){if(b){var
c=[0,dY(b[1])],d=[0,f(nA),c];return a(g[21],d)}return f(ny)}function
bW(a,e){var
b=dX(a,e),c=b[2],d=b[1]-1|0;if(2<d>>>0)throw I;switch(d){case
0:return[0,bW(a,z(c,0)[1])];case
1:return[1,bW(a,z(c,0)[1])];default:return 0}}function
aL(b){if(typeof
b==="number")return f(nG);else{if(0===b[0]){var
c=[0,aL(b[1])],d=[0,f(nK),c];return a(g[21],d)}var
e=[0,aL(b[1])],h=[0,f(nI),e];return a(g[21],h)}}function
dZ(c,b){var
d=a(i[8][3],b);return e(p[1],c,qu,d)}function
bX(a,e){var
b=dX(a,e),c=b[2],d=b[1]-1|0;if(2<d>>>0)throw I;switch(d){case
0:return 0;case
1:return[0,bW(a,z(c,0)[1])];default:return[1,bW(a,z(c,0)[1])]}}function
aq(b){if(typeof
b==="number")return f(nN);else{if(0===b[0]){var
c=[0,aL(b[1])],d=[0,f(nP),c];return a(g[21],d)}var
e=[0,aL(b[1])],h=[0,f(nR),e];return a(g[21],h)}}function
aY(c,b){var
d=a(i[8][1],b),f=a(m[33],d);return e(p[1],c,qv,f)}function
bd(b){var
c=aL(b[2]),d=[0,aq(b[1]),c],e=[0,f(fY),d];return a(g[21],e)}function
gi(a,h){var
c=b(g[3],a,h);if(9===c[0]){var
d=c[2],i=c[1],j=f(fY);if(e(g[95],a,i,j)){var
k=bW(a,z(d,1)[2]);return[0,bX(a,z(d,0)[1]),k]}throw I}throw I}function
aM(b){if(typeof
b==="number")return 0===b?f(nX):f(nZ);else
switch(b[0]){case
0:var
c=[0,bd(b[1])],d=[0,f(n1),c];return a(g[21],d);case
1:var
e=[0,aq(b[1])],h=[0,f(n3),e];return a(g[21],h);case
2:var
i=b[1],j=aM(b[2]),k=[0,aM(i),j],l=[0,f(n5),k];return a(g[21],l);case
3:var
m=b[1],n=aM(b[2]),o=[0,aM(m),n],p=[0,f(n7),o];return a(g[21],p);case
4:var
q=b[1],r=aM(b[2]),s=[0,aM(q),r],t=[0,f(n9),s];return a(g[21],t);case
5:var
u=[0,aM(b[1])],v=[0,f(n$),u];return a(g[21],v);default:var
w=[0,aM(b[1])],x=[0,f(ob),w];return a(g[21],x)}}function
d0(c,d,b){if(b){var
e=b[1],h=d0(c,d,b[2]),i=[0,c,a(d,e),h],j=[0,f(nt),i];return a(g[21],j)}var
k=[0,f(nv),[0,c]];return a(g[21],k)}function
gj(d,k,b){function
c(b){switch(b[0]){case
0:var
l=[0,d,a(k,b[1])],m=[0,f(o5),l];return a(g[21],m);case
1:var
n=[0,d,aL(b[1])],o=[0,f(o3),n];return a(g[21],o);case
2:var
p=b[1],q=c(b[2]),r=[0,d,c(p),q],s=[0,f(o7),r];return a(g[21],s);case
3:var
t=b[1],u=c(b[2]),v=[0,d,c(t),u],w=[0,f(pb),v];return a(g[21],w);case
4:var
x=b[1],y=c(b[2]),z=[0,d,c(x),y],A=[0,f(o$),z];return a(g[21],A);case
5:var
B=[0,d,c(b[1])],C=[0,f(o9),B];return a(g[21],C);default:var
e=b[2],D=b[1];if(e)var
i=[0,aL(e[1])],j=[0,f(nE),i],h=a(g[21],j);else
var
h=f(nC);var
E=[0,d,c(D),h],F=[0,f(pd),E];return a(g[21],F)}}return c(b)}function
gk(d,e,b){function
c(b){switch(b[0]){case
0:var
h=[0,d,a(e,b[1])],i=[0,f(ph),h];return a(g[21],i);case
1:var
j=b[1],k=c(b[2]),l=[0,d,aL(j),k],m=[0,f(pj),l];return a(g[21],m);default:var
n=b[2],o=b[1],p=c(b[3]),q=aL(n),r=[0,d,c(o),q,p],s=[0,f(pf),r];return a(g[21],s)}}return c(b)}function
at(d,c,a){function
b(c,a){switch(a[0]){case
0:return Y(p[1],c,qz,d,a[1]);case
1:return J(p[1],c,qA,dZ,a[1],b,a[2]);default:return cS(p[1],c,qB,b,a[1],dZ,a[2],b,a[3])}}return b(c,a)}function
br(h,e,b){var
c=f(h);function
d(b){if(typeof
b==="number"){var
h=[0,f(pJ),[0,c]];return a(g[21],h)}else
switch(b[0]){case
0:var
i=[0,c,dY(b[1])],j=[0,f(px),i];return a(g[21],j);case
1:var
k=[0,c,gk(c,e,b[1])],l=[0,f(pz),k];return a(g[21],l);case
2:var
m=b[1],n=d(b[2]),o=[0,c,gk(c,e,m),n],p=[0,f(pD),o];return a(g[21],p);case
3:var
q=b[1],r=d(b[2]),s=[0,c,d(q),r],t=[0,f(pB),s];return a(g[21],t);case
4:var
u=b[1],v=d(b[2]),w=[0,c,d(u),v],x=[0,f(pF),w];return a(g[21],x);default:var
y=[0,c,a(e,b[1])],z=[0,f(pH),y];return a(g[21],z)}}return d(b)}function
aN(e,c,a){function
d(c,a){if(typeof
a==="number")return b(p[1],c,qC);else
switch(a[0]){case
0:return Y(p[1],c,qD,qs,a[1]);case
1:var
f=a[1],g=function(a,b){return at(e,a,b)};return Y(p[1],c,qE,g,f);case
2:var
h=a[2],i=a[1],j=function(a,b){return at(e,a,b)};return J(p[1],c,qF,j,i,d,h);case
3:return J(p[1],c,qG,d,a[1],d,a[2]);case
4:return J(p[1],c,qH,d,a[1],d,a[2]);default:return Y(p[1],c,qI,e,a[1])}}return d(c,a)}function
gl(d,e,c){var
h=c[2],i=c[1],j=gj(d,e,c[3]);switch(h){case
0:var
b=f(pl);break;case
1:var
b=f(pn);break;case
2:var
b=f(pp);break;case
3:var
b=f(pt);break;case
4:var
b=f(pr);break;default:var
b=f(pv)}var
k=[0,d,gj(d,e,i),b,j],l=[0,f(qn),k];return a(g[21],l)}function
cD(d,c,a){try{var
h=function(a){var
b=f(a[1]);return e(g[95],d,c,b)},i=b(o[33],h,a)[2];return i}catch(a){a=u(a);if(a===H)throw I;throw a}}var
gm=[0,[0,oo,5],[0,[0,oq,3],[0,[0,ou,4],[0,[0,os,2],0]]]],gn=[0,[0,oN,5],[0,[0,oP,3],[0,[0,oT,4],[0,[0,oR,2],0]]]],go=[0,[0,oE,4],[0,[0,oC,2],[0,[0,oG,0],0]]];function
gp(a,c,b){return S(qJ[80],0,a[1],a[2],c,b)}function
qK(k,i){var
c=i[2],d=i[1],h=k[2],l=b(g[3],h,d);switch(l[0]){case
10:var
m=z(c,1)[2],n=z(c,0)[1];return[0,cD(h,d,gm),n,m];case
11:if(0===l[1][1][2]){var
o=f(dU);if(e(g[95],h,d,o)){var
p=f(aX);if(gp(k,z(c,0)[1],p)){var
q=z(c,2)[3];return[0,0,z(c,1)[2],q]}}throw I}break}return a(j[3],qL)}function
qM(k,i){var
c=i[2],d=i[1],h=k[2],l=b(g[3],h,d);switch(l[0]){case
10:var
m=z(c,1)[2],n=z(c,0)[1];return[0,cD(h,d,gn),n,m];case
11:if(0===l[1][1][2]){var
o=f(dU);if(e(g[95],h,d,o)){var
p=f(cz);if(gp(k,z(c,0)[1],p)){var
q=z(c,2)[3];return[0,0,z(c,1)[2],q]}}throw I}break}return a(j[3],qN)}function
qO(c,a){var
b=a[2],d=a[1],e=z(b,1)[2],f=z(b,0)[1];return[0,cD(c[2],d,go),f,e]}function
cE(f,j,c){function
d(a,c,b){if(a){var
f=a[1],i=a[2];if(e(g[96],j,f,b))return[0,a,c];var
h=d(i,c+1|0,b);return[0,[0,f,h[1]],h[2]]}return[0,[0,b,0],c]}var
b=d(f,1,c),h=b[1];return[0,h,a(i[7][1],b[2])]}function
gq(f,d,c){var
a=f,b=1;for(;;){if(a){var
h=a[2];if(e(g[95],d,a[1],c))return b;var
a=h,b=b+1|0;continue}throw[0,qR,qQ]}}var
gr=0;function
d1(d,l,y,x,h,c){function
n(c,b){var
a=cE(c,d,b);return[0,[1,a[2]],a[1]]}function
i(c,h){function
A(f,e,a){var
g=a[2],c=i(f,a[1]),h=c[1],d=i(c[2],g),j=d[2];return[0,b(e,h,d[1]),j]}try{var
G=[0,[0,a(l,h)],c];return G}catch(l){l=u(l);if(l===I){var
m=b(g[3],d,h);if(9===m[0]){var
j=m[2],p=m[1];if(10===b(g[3],d,p)[0]){try{var
v=function(a){var
b=f(a[1]);return e(g[95],d,p,b)},w=b(o[33],v,x)[2],k=w}catch(a){a=u(a);if(a!==H)throw a;var
k=qP}if(typeof
k==="number"){if(0===k){var
q=i(c,z(j,0)[1]);return[0,[5,q[1]],q[2]]}try{var
s=i(c,z(j,0)[1]),B=s[2],C=s[1],D=[0,b(y,C,z(j,1)[2]),B];return D}catch(b){b=u(b);if(a(aT[18],b)){var
r=cE(c,d,h);return[0,[1,r[2]],r[1]]}throw b}}else{if(0===k[0]){var
E=k[1],F=z(j,1)[2];return A(c,E,[0,z(j,0)[1],F])}var
t=cE(c,d,h);return[0,[1,t[2]],t[1]]}}return n(c,h)}return n(c,h)}throw l}}return i(h,c)}var
qT=[0,[0,f5,0],[0,[0,f7,1],0]],qU=[0,[0,f6,[0,function(b,a){return[4,b,a]}]],qT],qV=[0,[0,f4,[0,function(b,a){return[3,b,a]}]],qU],qW=[0,[0,f3,[0,function(b,a){return[2,b,a]}]],qV],qX=[0,[0,f_,0],[0,[0,ga,1],0]],qY=[0,[0,f$,[0,function(b,a){return[4,b,a]}]],qX],qZ=[0,[0,f9,[0,function(b,a){return[3,b,a]}]],qY],q0=[0,[0,f8,[0,function(b,a){return[2,b,a]}]],qZ],q1=[0,[0,dV,0],[0,[0,gc,1],0]],q2=[0,[0,cC,[0,function(b,a){return[4,b,a]}]],q1],q3=[0,[0,cB,[0,function(b,a){return[3,b,a]}]],q2],q4=[0,[0,cA,[0,function(b,a){return[2,b,a]}]],q3],q5=0,q6=[0,[0,cC,function(b,a){return[4,b,a]}],q5],q7=[0,[0,cB,function(b,a){return[3,b,a]}],q6],q8=[0,[0,cA,function(b,a){return[2,b,a]}],q7];function
cF(c,i){var
j=b(g[3],c,i);switch(j[0]){case
9:var
d=j[2],h=j[1];try{var
q=cD(c,h,q8),r=cF(c,z(d,0)[1]),s=b(q,r,cF(c,z(d,1)[2]));return s}catch(i){i=u(i);if(i===I){var
l=f(gb);if(e(g[95],c,h,l)){var
k=cF(c,z(d,0)[1]),m=a(n[eb],k);if(b(n[77],m,q9))throw I;return[5,k]}var
o=f(ge);if(e(g[95],c,h,o))return[0,gi(c,z(d,0)[1])];var
p=f(gd);if(e(g[95],c,h,p))return[1,bX(c,z(d,0)[1])];throw I}throw i}case
10:var
t=f(f0);if(e(g[95],c,i,t))return 0;var
v=f(f1);if(e(g[95],c,i,v))return 1;throw I;default:throw I}}function
q_(b){function
c(e,d){var
c=bX(b,d);if(typeof
c!=="number"&&1===c[0])return q$;return[6,e,a(n[12][15],c)]}function
d(a){return bX(b,a)}return function(a,e){return d1(b,d,c,qW,a,e)}}function
ra(d){function
c(e,f){var
c=bX(d,f);if(typeof
c!=="number"&&1===c[0]){if(0===e[0])return[0,b(n[85],e[1],c)];a(j[31],rb);a(j[52],j[28]);throw I}return[6,e,a(n[12][15],c)]}function
e(a){return gi(d,a)}return function(a,b){return d1(d,e,c,q0,a,b)}}function
rc(c){function
d(d,b){var
e=gh(c,b);return[6,d,a(n[7][1],e)]}function
e(a){b(qS[6],0,0);return cF(c,a)}return function(a,b){return d1(c,e,d,q4,a,b)}}function
d2(o,i,n,m,h){var
c=h[2],d=b(g[3],c,m);if(9===d[0]){var
f=b(o,h,[0,d[1],d[2]]),p=f[3],q=f[1],k=e(i,c,n,f[2]),r=k[1],l=e(i,c,k[2],p);return[0,[0,r,q,l[1]],l[2]]}return a(j[3],rd)}function
cG(a,b,c){return d2(qK,q_,a,b,c)}function
cH(a,b,c){return d2(qO,ra,a,b,c)}function
re(a,b,c){return d2(qM,rc,a,b,c)}function
rf(b,a){return[2,b,a]}function
rg(b,a){return[3,b,a]}function
rh(b,a){return[2,[5,b,0,a],[5,a,0,b]]}function
ri(b,a){return[5,b,0,a]}function
cI(e,d,c,a){if(typeof
c!=="number"&&0===c[0])if(typeof
a!=="number"&&0===a[0])return[0,d];return b(e,c,a)}function
gs(l,m,k,h,d){var
j=l[2];function
B(f,d,c){try{var
b=e(m,f,c,l),g=b[2],h=b[1],j=[0,[1,h,d,c],g,a(i[4][2],d)];return j}catch(b){b=u(b);if(a(aT[18],b))return[0,[0,c],f,d];throw b}}function
c(i,h,d){var
k=b(g[3],j,d);switch(k[0]){case
6:var
z=k[3],F=k[2];if(e(g[108][13],j,1,z)){var
o=c(i,h,F),G=o[1],p=c(o[2],o[3],z),H=p[3],J=p[2];return[0,cI(ri,d,G,p[1]),J,H]}break;case
9:var
m=k[2],n=k[1],A=m.length-1;if(!(3<=A))switch(A){case
0:break;case
1:var
K=m[1],L=f(fV);if(e(g[95],j,n,L)){var
q=c(i,h,K);return[0,[4,q[1]],q[2],q[3]]}break;default:var
r=m[1],s=m[2],M=f(dR);if(e(g[95],j,n,M)){var
t=c(i,h,r),N=t[1],u=c(t[2],t[3],s),O=u[3],P=u[2];return[0,cI(rf,d,N,u[1]),P,O]}var
Q=f(dS);if(e(g[95],j,n,Q)){var
v=c(i,h,r),R=v[1],w=c(v[2],v[3],s),S=w[3],T=w[2];return[0,cI(rg,d,R,w[1]),T,S]}var
U=f(np);if(e(g[95],j,n,U)){var
x=c(i,h,r),V=x[1],y=c(x[2],x[3],s),W=y[3],X=y[2];return[0,cI(rh,d,V,y[1]),X,W]}}return B(i,h,d)}var
D=f(fW);if(e(g[95],j,d,D))return[0,0,i,h];var
E=f(dT);if(e(g[95],j,d,E))return[0,1,i,h];var
C=Y(rj[3],0,l[1],l[2],d);if(a(rk[8],C))return[0,[0,d],i,h];throw I}return c(k,h,d)}function
gt(c,e,b){function
d(b){if(typeof
b==="number"){if(0===b){var
h=[0,f(pN),[0,c]];return a(g[21],h)}var
i=[0,f(pR),[0,c]];return a(g[21],i)}else
switch(b[0]){case
0:var
j=[0,c,b[1]],k=[0,f(p$),j];return a(g[21],k);case
1:var
l=[0,c,a(e,b[1])],m=[0,f(p7),l];return a(g[21],m);case
2:var
n=b[1],o=d(b[2]),p=[0,c,d(n),o],q=[0,f(pV),p];return a(g[21],q);case
3:var
r=b[1],s=d(b[2]),t=[0,c,d(r),s],u=[0,f(pZ),t];return a(g[21],u);case
4:var
v=[0,c,d(b[1])],w=[0,f(p3),v];return a(g[21],w);default:var
x=b[1],y=d(b[3]),z=[0,c,d(x),y],A=[0,f(qd),z];return a(g[21],A)}}return d(b)}function
d3(g,a){function
d(i,h){var
b=i,a=h;for(;;){if(typeof
a==="number")var
c=0;else
switch(a[0]){case
0:return cE(b,g,a[1])[1];case
4:var
a=a[1];continue;case
5:var
f=a[3],e=a[1],c=1;break;case
1:var
c=0;break;default:var
f=a[2],e=a[1],c=1}if(c){var
b=d(b,e),a=f;continue}return b}}return d(0,a)}var
cJ=[h,function(m){function
c(a){var
b=a[2];return[0,b,f(a[1])]}var
d=b(o[17],c,gm);function
e(b){var
c=a(i[8][4],b);return aq(a(i[7][7],c))}var
g=f(f7),h=f(f6),j=f(f5),k=f(f4),l=f(f3);return[0,f(aX),aq,l,k,j,h,g,e,d]}],cK=[h,function(m){function
c(a){var
b=a[2];return[0,b,f(a[1])]}var
d=b(o[17],c,go);function
e(b){var
c=a(i[8][4],b);return aq(a(i[7][7],c))}var
g=f(ga),h=f(f$),j=f(f_),k=f(f9),l=f(f8);return[0,f(bV),bd,l,k,j,h,g,e,d]}];function
aO(b){if(typeof
b==="number")return 0===b?f(f0):f(f1);else
switch(b[0]){case
0:var
c=[0,bd(b[1])],d=[0,f(ge),c];return a(g[21],d);case
1:var
e=[0,aq(b[1])],h=[0,f(gd),e];return a(g[21],h);case
2:var
i=b[1],j=aO(b[2]),k=[0,aO(i),j],l=[0,f(cA),k];return a(g[21],l);case
3:var
m=b[1],n=aO(b[2]),o=[0,aO(m),n],p=[0,f(cB),o];return a(g[21],p);case
4:var
q=b[1],r=aO(b[2]),s=[0,aO(q),r],t=[0,f(cC),s];return a(g[21],t);case
5:var
u=[0,aO(b[1])],v=[0,f(gb),u];return a(g[21],v);default:var
w=[0,aO(b[1])],x=[0,f(dV),w];return a(g[21],x)}}var
rl=[h,function(m){function
c(a){var
b=a[2];return[0,b,f(a[1])]}var
d=b(o[17],c,gn);function
e(b){var
c=a(i[8][4],b);return dY(a(i[7][4],c))}var
g=f(gc),h=f(cC),j=f(dV),k=f(cB),l=f(cA);return[0,f(cz),aO,l,k,j,h,g,e,d]}];function
gu(i,h,f){var
b=[0,i,h,f];for(;;){var
d=b[1];if(0===d)return b[3];var
c=b[2];if(c){var
e=c[1],j=c[2],b=[0,d-1|0,j,a(g[18],[0,e[1],e[2],b[3]])];continue}throw[0,ao,rm]}}function
gv(m,d,c){function
j(d){var
c=d;for(;;)switch(c[0]){case
0:return ah[1];case
1:var
e=a(i[8][3],c[1]);return a(ah[5],e);case
5:case
6:var
c=c[1];continue;default:var
f=c[1],g=j(c[2]),h=j(f);return b(ah[7],h,g)}}function
l(k){var
a=k;for(;;){if(typeof
a==="number")var
c=0;else
switch(a[0]){case
1:var
d=a[1],g=d[1],h=j(d[3]),i=j(g);return b(ah[7],i,h);case
4:var
a=a[1];continue;case
5:var
f=a[3],e=a[1],c=1;break;case
0:var
c=0;break;default:var
f=a[2],e=a[1],c=1}if(c){var
m=l(f),n=l(e);return b(ah[7],n,m)}return ah[1]}}var
t=l(c),v=a(ah[21],t);function
w(b,a){return[0,a,b+1|0]}var
n=b(o[18],w,v),q=d3(m,c);function
x(c){var
e=d[1],f=b(p[4],rn,c[2]);return[0,a(aV[1][6],f),e]}var
k=b(o[17],x,n);function
y(c,f){var
d=g[14],e=b(p[4],ro,c+1|0);return[0,a(aV[1][6],e),d]}var
r=b(o[18],y,q);function
z(b,a){return[0,a[1],b[1]]}var
A=e(o[23],z,n,k);function
s(f,c){function
e(c){switch(c[0]){case
0:return a(d[2],c[1]);case
1:var
h=a(i[8][3],c[1]),j=f+b(o[38],h,n)|0;return a(g[9],j);case
2:var
k=c[1],l=e(c[2]),m=[0,e(k),l];return a(g[21],[0,d[3],m]);case
3:var
p=c[1],q=e(c[2]),r=[0,e(p),q];return a(g[21],[0,d[4],r]);case
4:var
s=c[1],t=e(c[2]),u=[0,e(s),t];return a(g[21],[0,d[6],u]);case
5:var
v=[0,e(c[1])];return a(g[21],[0,d[5],v]);default:var
w=c[1],x=a(d[8],c[2]),y=[0,e(w),x];return a(g[21],[0,d[7],y])}}return e(c)}function
B(h,e,c){try{var
k=[0,b(o[38],h,d[9]),[0,e,c]],l=a(g[21],k);return l}catch(b){b=u(b);if(b===H){var
i=[0,d[1],e,c],j=[0,f(dU),i];return a(g[21],j)}throw b}}function
h(e,d,c){if(typeof
c==="number")return 0===c?f(fW):f(dT);else
switch(c[0]){case
0:var
n=e+gq(q,m,c[1])|0;return a(g[9],n);case
1:var
i=c[1],j=i[2],k=i[1],l=s(d,i[3]);return B(j,s(d,k),l);case
2:var
o=c[1],p=h(e,d,c[2]),r=[0,h(e,d,o),p],t=[0,f(dR),r];return a(g[21],t);case
3:var
u=c[1],v=h(e,d,c[2]),w=[0,h(e,d,u),v],x=[0,f(dS),w];return a(g[21],x);case
4:var
y=c[1],z=f(dT),A=h(e,d,y);return b(g[33],A,z);default:var
C=c[1],D=h(e+1|0,d+1|0,c[3]),E=h(e,d,C);return b(g[33],E,D)}}var
C=a(o[1],k),D=a(o[1],r),E=aW(function(c){var
d=gq(q,m,c),e=b(p[4],rp,d),f=a(aV[1][6],e);return a(g[10],f)},c),F=a(o[9],A),G=a(o[9],r),I=h(a(o[1],k),0,c);function
J(a){return[0,[0,a[1]],a[2]]}var
K=gu(C,b(o[17],J,k),I);function
L(a){return[0,[0,a[1]],a[2]]}return[0,gu(D,b(o[17],L,r),K),G,F,E]}function
gw(f,e){var
c=e,b=f;for(;;){if(b){var
d=b[1],h=b[2],i=d[3],j=d[2],k=a(aV[1][6],d[1]),c=Y(g[40],k,j,i,c),b=h;continue}return c}}var
rt=[h,function(a){return F(rs,rr,rq)}],rx=[h,function(a){return F(rw,rv,ru)}],rB=[h,function(a){return F(rA,rz,ry)}],rF=[h,function(a){return F(rE,rD,rC)}];function
cL(c,b){if(typeof
b==="number"){var
d=[0,f(rB),[0,c]];return a(g[21],d)}else{if(0===b[0]){var
e=[0,c,b[1]],h=[0,f(rx),e];return a(g[21],h)}var
i=b[2],j=b[1],k=cL(c,b[3]),l=[0,c,cL(c,j),i,k],m=[0,f(rt),l];return a(g[21],m)}}function
gx(b){if(b){var
c=b[1][1],d=0,f=function(d,b){var
e=b[1],f=a(i[7][1],b[2]);return Y(n[88],c,f,e,d)};return e(o[20],f,d,b)}return 0}function
cM(b){if(typeof
b==="number")return f(og);else
switch(b[0]){case
0:var
c=b[1],d=cM(b[2]),e=[0,br(aX,aq,c),d],h=[0,f(oi),e];return a(g[21],h);case
1:var
i=b[1],j=cM(b[2]),k=[0,br(aX,aq,i),j],l=[0,f(ok),k];return a(g[21],l);default:var
m=b[3],n=b[2],o=b[1],p=d0(f(f2),cM,m),q=br(aX,aq,n),r=[0,br(aX,aq,o),q,p],s=[0,f(om),r];return a(g[21],s)}}function
gy(a){return cM(a)}function
au(b,a){return J(p[1],b,rG,aY,a[1],dZ,a[2])}function
be(c,a){if(typeof
a==="number")return b(p[1],c,rH);else
switch(a[0]){case
0:var
d=a[2],e=a[1],f=function(a,b){return aN(aY,a,b)};return J(p[1],c,rI,f,e,be,d);case
1:var
g=a[2],h=a[1],i=function(a,b){return aN(aY,a,b)};return J(p[1],c,rJ,i,h,be,g);default:var
j=a[3],k=a[2],l=a[1],m=function(a,c){function
b(c,a){if(a){var
d=a[2],e=a[1];return d?J(p[1],c,qw,be,e,b,d):Y(p[1],c,qx,be,e)}return 0}return J(p[1],a,qy,rL,b,c,rK)},n=function(a,b){return aN(aY,a,b)},o=function(a,b){return aN(aY,a,b)};return cS(p[1],c,rM,o,l,n,k,m,j)}}function
gz(h,g,f,e,b){if(b){var
i=b[1],m=i[2],n=i[1],c=gz(h,g,f,e,b[2]),j=c[3],k=c[2],l=c[1];try{var
d=gs(h,g,k,j,m),o=[0,[0,[0,n,d[1]],l],d[2],d[3]];return o}catch(b){b=u(b);if(a(aT[18],b))return[0,l,k,j];throw b}}return[0,0,f,e]}function
gA(d,c,h,g,f){var
b=gs(d,c,h,a(i[4][3],0),f),j=b[1],e=gz(d,c,b[2],b[3],g);return[0,e[1],j,e[2]]}var
cN=[h,function(c){var
a=f(f2),b=f(aX);return[0,f(aX),b,aq,a,gy]}],cO=[h,function(d){function
a(a){return br(bV,bd,a)}var
b=f(dW),c=f(bV);return[0,f(bV),c,bd,b,a]}];function
rN(b,i,h,e,d){var
j=[0,b[2]],k=[0,f(gg),j],c=a(g[21],k),l=b[3],m=b[2],n=gt(c,function(a){return gl(m,l,a)},d),o=gx(e),p=cL(b[1],o);function
q(d){var
e=a(av[42][6],d),j=[0,b[1]],k=[0,f(rF),j],l=[0,[0,rP,p,a(g[21],k)],[0,[0,rO,i,h],0]],m=[0,f(gf),[0,c]],o=gw([0,[0,rQ,n,a(g[21],m)],l],e),q=[0,a(ac[53],o),0];return a(D[66][22],q)}return a(bY[67][8],q)}function
a0(c,b){if(typeof
c==="number"){if(0===c){if(typeof
b==="number")if(0===b)return 0}else
if(typeof
b==="number")if(0!==b)return 1}else
switch(c[0]){case
0:return[0,c[1]];case
1:if(typeof
b!=="number"&&1===b[0])return b;break;case
2:if(typeof
b!=="number"&&2===b[0]){var
d=b[1],e=c[1],f=a0(c[2],b[2]);return[2,a0(e,d),f]}break;case
3:if(typeof
b!=="number"&&3===b[0]){var
g=b[1],h=c[1],i=a0(c[2],b[2]);return[3,a0(h,g),i]}break;case
4:if(typeof
b!=="number"&&4===b[0])return[4,a0(c[1],b[1])];break;default:if(typeof
b!=="number"&&5===b[0]){var
k=b[2],l=b[1],m=c[1],n=a0(c[3],b[3]);return[5,a0(m,l),k,n]}}return a(j[3],rV)}var
d4=[a4,rW,a2(0)];function
gB(b,a){var
c=[0,a,0];function
d(c,b){var
d=b[2],e=b[1],a=c[2],f=c[1];if(typeof
a!=="number"&&0===a[0])return[0,e,d];return[0,[5,a,[0,f],e],[0,f,d]]}return e(o[21],d,b,c)}function
gC(r,q,p,n,m,C,N,B,A,M){var
s=gB(B,A)[1],t=fT(r,q,p,n,s),h=t[1],D=t[2];function
k(c){if(c){var
l=c[2],m=c[1],f=function(b){var
c=b[1];return[0,function(d){var
e=[0,a(b[2],0),d],c=a(b[3],e);return c?[0,[0,c[1],b]]:0},c]},g=b(o[17],f,C),h=function(a){return a[1]},j=b(o[17],h,m),d=b(i[12],g,j);if(d){var
n=d[1],e=k(l);return e?[0,[0,n,e[1]]]:0}return 0}return rR}var
l=k(h);if(l){var
v=l[1],E=b(o[47],h,v),F=i[5][1],G=function(c,a){return b(i[5][4],a,c)},H=e(o[20],G,F,D),I=function(f,c){var
d=c[2],g=c[1],h=i[5][1],j=a(d[2][4],d[1]);function
k(c,a){var
d=b(o[7],g,c)[2];return b(i[5][4],d,a)}var
l=e(ah[15],k,j,h);return b(i[5][7],f,l)},J=e(o[20],I,H,E),d=function(c){if(typeof
c==="number")return 0===c?0:1;else
switch(c[0]){case
0:return[0,c[1]];case
1:var
o=c[3],p=c[2],r=c[1];return b(i[5][3],p,J)?[1,r,p,o]:[0,o];case
2:var
s=c[2],h=d(c[1]),j=d(s);if(typeof
h!=="number"&&0===h[0])if(typeof
j!=="number"&&0===j[0]){var
t=[0,h[1],j[1]],u=[0,f(dR),t];return[0,a(g[21],u)]}return[2,h,j];case
3:var
v=c[2],k=d(c[1]),l=d(v);if(typeof
k!=="number"&&0===k[0])if(typeof
l!=="number"&&0===l[0]){var
w=[0,k[1],l[1]],x=[0,f(dS),w];return[0,a(g[21],x)]}return[3,k,l];case
4:var
m=d(c[1]);if(typeof
m!=="number"&&0===m[0]){var
y=[0,m[1]],z=[0,f(fV),y];return[0,a(g[21],z)]}return[4,m];default:var
q=c[2],A=c[3],n=d(c[1]),e=d(A);if(typeof
n!=="number"&&0===n[0]){var
B=n[1];if(q)return e;if(typeof
e!=="number"&&0===e[0])return[0,b(g[33],B,e[1])]}return[5,n,q,e]}},c=d(s),K=fT(r,q,p,n,c)[1],w=function(i,c,h){var
d=c[2],k=c[1];function
l(b,a){return[0,a[1],b]}var
e=b(o[18],l,h);function
m(d){try{var
f=b(o[7],i,d)[1],c=f}catch(b){b=u(b);if(b[1]!==rS)throw b;var
c=a(j[3],rT)}return b(o[38],c,e)}try{var
s=b(d[5],k,m),g=s}catch(c){c=u(c);if(!a(aT[18],c))throw c;var
n=function(a){return a[1]},p=b(o[17],n,e),q=[0,a(d[2],0),p],f=a(d[3],q),r=f?f[1]:a(j[3],rU),g=r}return g},x=b(o[47],h,v),y=function(c){function
f(f){var
g=f[2],k=f[1],j=a(g[2][4],g[1]);function
d(g,f){var
c=g,a=f;for(;;){if(a){var
e=a[2],h=a[1];if(b(ah[3],c,j))return[0,h,d(c+1|0,e)];var
c=c+1|0,a=e;continue}return 0}}var
h=d(0,k);return e(i[13],ae,h,c)}var
d=b(o[33],f,x);return w(d[1],d[2],c)},z=b(o[17],y,K),L=fS(c);return[0,[0,L,c,d0(m[4],m[5],z)]]}return 0}function
gD(d,c,b){var
f=a(bY[67][4],b);return e(ac[13],d,c,f)}function
a1(ay,ax,aw,au,at,as,ar){return function(az,aA){function
c(c){var
e=a(av[42][4],c),v=a(av[42][6],c),w=a(av[42][14],c);try{var
m=[0,a(av[42][5],c),e],h=gA(m,ay,gr,w,v),n=h[3],E=h[2],F=h[1],i=f(as),G=f(ar),p=gC(ax,aw,au,at,i,az,n,F,E,m);if(p)var
k=p[1],q=k[2],H=k[3],J=k[1],d=gv(e,G,q),l=d[3],K=d[4],L=d[2],M=d[1],r=function(b){return a(ac[2],b[1])},O=b(o[17],r,l),P=a(D[66][22],O),Q=b(o[17],r,L),R=a(D[66][22],Q),S=function(a){return[0,b(gE[1],0,[1,[0,a]])]},T=a(aV[1][6],r3),s=gD(aV[1][10][1],T,c),U=function(b){var
c=b[2];return[0,a(g[10],b[1]),c]},V=b(o[17],U,l),W=[0,i[4]],X=[0,f(fX),W],Z=[0,R,[0,P,[0,rN(i,H,a(g[21],X),V,K),0]]],_=a(D[66][22],Z),$=d3(e,q),aa=a(o[9],$),ab=function(a){return b(o[7],n,a[2]-1|0)},ad=b(o[17],ab,l),ae=b(j[26],aa,ad),af=b(D[66][3],_,aA),ag=a(ac[78],0),ah=b(D[66][3],ag,af),ai=[0,a(g[10],s),ae],aj=a(g[34],ai),ak=[0,a(ac[45],aj),0],al=b(o[17],g[10],J),am=[0,a(ac[g6],al),ak],an=[0,ah,[0,a(D[66][22],am),0]],ao=S(s),ap=Y(ac[he],1,r4,ao,M),t=b(D[66][21],ap,an);else
var
aq=a(aZ[3],r5),t=b(D[66][4],0,aq);return t}catch(c){c=u(c);if(c===I){var
x=a(aZ[3],rX);return b(D[66][4],0,x)}if(c===N[8]){var
y=a(aZ[3],rY);return b(D[66][4],0,y)}if(c===d4){a(j[52],j[28]);var
z=b(j[17],r0,rZ),A=b(j[17],r1,z),B=b(j[17],r2,A),C=a(aZ[3],B);return b(D[66][4],0,C)}throw c}}return a(bY[67][8],c)}}function
r6(i,h,e){var
b=f(fZ),c=f(cz),j=[0,f(dW)],k=[0,f(fX),j],l=a(g[21],k),m=[0,f(gg),[0,b]],d=a(g[21],m),n=gt(d,function(a){return gl(b,aM,a)},e),o=cL(c,gx(h));function
p(b){var
e=a(av[42][6],b),h=[0,F(r_,r9,r8),[0,c]],j=[0,[0,r$,o,a(g[21],h)],[0,[0,r7,i,l],0]],k=[0,f(gf),[0,d]],m=gw([0,[0,sa,n,a(g[21],k)],j],e),p=[0,a(ac[53],m),0];return a(D[66][22],p)}return a(bY[67][8],p)}function
cP(aA){return function(aB){var
y=n[g0],z=n[119],A=n[121],B=n[122],C=[h,function(d){function
a(a){return br(bV,bd,a)}var
b=f(dW),c=f(fZ);return[0,f(cz),c,bd,b,a]}];function
c(c){var
e=a(av[42][4],c),E=a(av[42][6],c),F=a(av[42][14],c);try{var
l=[0,a(av[42][5],c),e],h=gA(l,re,gr,F,E),m=h[3],p=h[2],q=h[1],O=f(C),P=function(b){var
c=b[2],d=b[1];return[0,d,aG(a(n[73],n[eb]),c)]},Q=b(o[17],P,q),r=gC(y,z,A,B,O,aA,m,Q,aG(a(n[73],n[eb]),p),l);if(r)var
i=r[1],R=i[3],S=i[2],T=i[1],U=function(a){return b(o[31],a[1],T)},s=gB(b(o[35],U,q),p),V=s[2],t=a0(S,s[1]),d=gv(e,f(rl),t),k=d[3],W=d[4],X=d[2],Z=d[1],v=function(b){return a(ac[2],b[1])},_=b(o[17],v,k),$=a(D[66][22],_),aa=b(o[17],v,X),ab=a(D[66][22],aa),ad=function(a){return[0,b(gE[1],0,[1,[0,a]])]},ae=a(aV[1][6],sh),w=gD(aV[1][10][1],ae,c),af=function(b){var
c=b[2];return[0,a(g[10],b[1]),c]},ag=[0,ab,[0,$,[0,r6(R,b(o[17],af,k),W),0]]],ah=a(D[66][22],ag),ai=d3(e,t),aj=a(o[9],ai),ak=function(a){return b(o[7],m,a[2]-1|0)},al=b(o[17],ak,k),am=b(j[26],aj,al),an=b(D[66][3],ah,aB),ao=a(ac[78],0),ap=b(D[66][3],ao,an),aq=[0,a(g[10],w),am],ar=a(g[34],aq),as=[0,a(ac[45],ar),0],at=b(o[17],g[10],V),au=[0,a(ac[g6],at),as],aw=[0,ap,[0,a(D[66][22],au),0]],ax=ad(w),ay=Y(ac[he],1,si,ax,Z),x=b(D[66][21],ay,aw);else
var
az=a(aZ[3],sj),x=b(D[66][4],0,az);return x}catch(c){c=u(c);if(c===I){var
G=a(aZ[3],sb);return b(D[66][4],0,G)}if(c===N[8]){var
H=a(aZ[3],sc);return b(D[66][4],0,H)}if(c===d4){a(j[52],j[28]);var
J=b(j[17],se,sd),K=b(j[17],sf,J),L=b(j[17],sg,K),M=a(aZ[3],L);return b(D[66][4],0,M)}throw c}}return a(bY[67][8],c)}}var
sk=a(bT[1],[0,ae,ba[27]]),so=a(sn[8],sm)?0:[h,function(a){throw d4}];function
sv(g){var
l=g[2],m=g[1];f(so);var
h=[0,ss,[0,sr,[0,b(j[17],sq,sp[36]),0]]],k=a(st[3],0),d=e(o[20],su[4],k,h),c=e(i[16],d,[0,d],[0,m,l]);return 0===c[0]?c[1]:a(j[3],c[1])}var
sw=b(sk[6],sl,sv);function
gF(c,b){return a(sw,[0,c,b])}function
cQ(a){switch(a[0]){case
0:return[0,[0,a[1],0]];case
1:var
b=a[1];return[1,b,cQ(a[2])];default:var
c=a[2],d=a[1],e=cQ(a[3]);return[2,cQ(d),c,e]}}function
gG(f,c){var
d=gF(f,c);if(d){var
e=a(ap[2],d[1]);return b(n[111],c,e)?[0,e]:(a(j[31],sx),0)}return 0}function
bZ(e,d,c){function
f(j,h){var
c=j,d=h;for(;;){if(typeof
c!=="number")switch(c[0]){case
0:var
g=a(i[8][5],c[1]);return e<=g?b(ah[4],g-e|0,d):d;case
2:var
c=c[2];continue;case
3:case
4:var
k=c[1],l=f(c[2],d),c=k,d=l;continue}return d}}return f(c,d)}function
b0(a){return bZ(0,ah[1],a)}function
aP(b,d){function
c(b){if(typeof
b!=="number")switch(b[0]){case
0:var
e=a(d,a(i[8][5],b[1]));return[0,a(i[7][4],e)];case
2:var
f=b[1];return[2,f,c(b[2])];case
3:var
g=b[1],h=c(b[2]);return[3,c(g),h];case
4:var
j=b[1],k=c(b[2]);return[4,c(j),k]}return b}return c(b)}function
d5(a){function
d(h,g,f){var
b=h,a=g,c=f;for(;;)if(typeof
a==="number")return c;else
switch(a[0]){case
0:var
i=a[2],j=bZ(b,c,a[1]),b=b+1|0,a=i,c=j;continue;case
1:var
k=a[2],l=bZ(b,c,a[1]),b=b+1|0,a=k,c=l;continue;default:var
m=a[3],n=a[1],p=bZ(b,bZ(b,c,a[2]),n),q=function(c,a){return d(b+1|0,a,c)};return e(o[20],q,p,m)}}return d(0,a,ah[1])}function
d6(c,f){function
d(c,b){return b<c?b:a(f,b-c|0)+c|0}function
e(c,a){if(typeof
a==="number")return 0;else
switch(a[0]){case
0:var
f=a[1],g=e(c+1|0,a[2]);return[0,aP(f,function(a){return d(c,a)}),g];case
1:var
h=a[1],i=e(c+1|0,a[2]);return[1,aP(h,function(a){return d(c,a)}),i];default:var
j=a[3],k=a[2],l=a[1],m=function(a){return e(c+1|0,a)},o=b(n[10],m,j),p=aP(k,function(a){return d(c,a)});return[2,aP(l,function(a){return d(c,a)}),p,o]}}return e(0,c)}function
b1(d,c){function
e(b){var
c=b[2];return[0,a(n[71],b[1]),c]}return a(d,b(o[17],e,c))}var
gH=a(bT[1],[0,ae,ba[27]]),sz=a(bT[1],[0,ae,ba[27]]);function
sA(a){var
c=a[1],d=a[2];return b1(b(ap[4],c[1],c[2]),d)}var
sC=b(gH[6],sB,sA);function
sD(a){var
c=a[1],d=a[2];return b1(b(ap[5],c[1],c[2]),d)}var
sF=b(gH[6],sE,sD);function
sG(b){var
c=b[2];return b1(a(ap[6],b[1]),c)}var
sI=b(sz[6],sH,sG);function
sJ(b,a){return at(au,b,a[1])}function
sK(a,b){return aN(au,a,b)}var
sM=[0,sL,dO,function(a){var
c=a[2];return b1(b(ap[7],a[1],ap[8]),c)},b0,aP,sK,sJ];function
sN(b,a){return at(au,b,a[1])}function
sO(a,b){return aN(au,a,b)}var
sQ=[0,sP,dO,function(a){var
c=a[2];return b1(b(ap[7],a[1],ap[8]),c)},b0,aP,sO,sN];function
sR(b,a){return at(au,b,a[1])}var
gI=[0,sS,dO,sI,b0,aP,function(a,b){return aN(au,a,b)},sR];function
gJ(b,a){function
c(b,a){return at(au,b,a[1])}function
d(a,b){return aN(au,a,b)}function
e(a){return gG(a[1],a[2])}return[0,sT,function(c){return[0,b,a]},e,b0,aP,d,c]}function
gK(b,a){function
c(b,a){return at(au,b,a[1])}function
d(a,b){return aN(au,a,b)}function
e(a){return gG(a[1],a[2])}return[0,sU,function(c){return[0,b,a]},e,b0,aP,d,c]}function
gL(d,c){function
e(b,a){return at(aY,b,a[1])}function
f(f){var
g=f[2],i=f[1];function
h(a){var
b=a[2];return[0,cQ(a[1]),b]}var
d=gF(i,b(o[17],h,g));if(d)var
e=a(ap[3],d[1]),c=b(n[89],g,e)?[0,e]:(a(j[31],sy),a(j[52],j[28]),0);else
var
c=0;return c?[0,[0,c[1],0]]:0}return[0,sV,function(a){return[0,d,c]},f,d5,d6,be,e]}var
sX=[0,sW,fQ,sC,d5,d6,be,function(b,a){return at(aY,b,a[1])}],sZ=[0,sY,fQ,sF,d5,d6,be,function(b,a){return at(aY,b,a[1])}],s0=a(a1(cH,n[cX],n[cT],n[cV],n[cY],cO,cK),[0,sM,0]);function
s1(b){var
c=[0,gJ(s2,[0,b]),0];return a(a1(cH,n[cX],n[cT],n[cV],n[cY],cO,cK),c)}var
s3=cP([0,sQ,0]);function
s4(a){return cP([0,gK(s5,[0,a]),0])}function
s6(b){var
c=[0,gL(s7,[0,b]),0];return a(a1(cG,n[96],n[94],n[97],n[98],cN,cJ),c)}var
s9=[0,gL(s8,0),0],s_=a(a1(cG,n[96],n[94],n[97],n[98],cN,cJ),s9),ta=[0,gJ(s$,0),0],tb=a(a1(cH,n[cX],n[cT],n[cV],n[cY],cO,cK),ta),td=cP([0,gK(tc,0),0]),te=a(a1(cG,n[96],n[94],n[97],n[98],cN,cJ),[0,sX,0]),tf=a(a1(cG,n[96],n[94],n[97],n[98],cN,cJ),[0,sZ,0]),tg=cP([0,gI,0]),R=[0,s6,s1,s4,te,tf,tg,a(a1(cH,n[cX],n[cT],n[cV],n[cY],cO,cK),[0,gI,0]),s_,tb,td,s0,s3,gy];aw(645,R,"Micromega_plugin.Coq_micromega");a(th[10],ad);var
ti=0,tk=[0,[0,tj,function(a){return ac[55]}],ti];S(t[10][8],ad,tl,0,0,tk);var
tm=0;function
tn(d,c){var
e=b(t[13][24],c,d);return a(a(R[1],-1),e)}var
tq=[0,[0,[0,tp,[1,[5,a(O[16],t[2][8])],to,0]],tn],tm];function
tr(d,c,a){var
e=b(t[13][24],a,c);return b(R[1],d,e)}var
tt=[1,[5,a(O[16],t[2][8])],ts,0],tw=[0,[0,[0,tv,[1,[5,a(O[16],d7[6])],tu,tt]],tr],tq];S(t[10][8],ad,tx,0,0,tw);var
ty=0;function
tz(d,c){var
e=b(t[13][24],c,d);return a(R[4],e)}var
tC=[0,[0,[0,tB,[1,[5,a(O[16],t[2][8])],tA,0]],tz],ty];S(t[10][8],ad,tD,0,0,tC);var
tE=0;function
tF(d,c){var
e=b(t[13][24],c,d);return a(R[5],e)}var
tI=[0,[0,[0,tH,[1,[5,a(O[16],t[2][8])],tG,0]],tF],tE];S(t[10][8],ad,tJ,0,0,tI);var
tK=0;function
tL(d,c){var
e=b(t[13][24],c,d);return a(R[6],e)}var
tO=[0,[0,[0,tN,[1,[5,a(O[16],t[2][8])],tM,0]],tL],tK];S(t[10][8],ad,tP,0,0,tO);var
tQ=0;function
tR(d,c){var
e=b(t[13][24],c,d);return a(R[7],e)}var
tU=[0,[0,[0,tT,[1,[5,a(O[16],t[2][8])],tS,0]],tR],tQ];S(t[10][8],ad,tV,0,0,tU);var
tW=0;function
tX(d,c){var
e=b(t[13][24],c,d);return a(R[8],e)}var
t0=[0,[0,[0,tZ,[1,[5,a(O[16],t[2][8])],tY,0]],tX],tW];S(t[10][8],ad,t1,0,0,t0);var
t2=0;function
t3(d,c){var
e=b(t[13][24],c,d);return a(R[9],e)}var
t6=[0,[0,[0,t5,[1,[5,a(O[16],t[2][8])],t4,0]],t3],t2];S(t[10][8],ad,t7,0,0,t6);var
t8=0;function
t9(d,c){var
e=b(t[13][24],c,d);return a(R[10],e)}var
ua=[0,[0,[0,t$,[1,[5,a(O[16],t[2][8])],t_,0]],t9],t8];S(t[10][8],ad,ub,0,0,ua);var
uc=0;function
ud(d,c){var
e=b(t[13][24],c,d);return a(R[11],e)}var
ug=[0,[0,[0,uf,[1,[5,a(O[16],t[2][8])],ue,0]],ud],uc];S(t[10][8],ad,uh,0,0,ug);var
ui=0;function
uj(d,c){var
e=b(t[13][24],c,d);return a(R[12],e)}var
um=[0,[0,[0,ul,[1,[5,a(O[16],t[2][8])],uk,0]],uj],ui];S(t[10][8],ad,un,0,0,um);var
uo=0;function
up(c,a){var
d=b(t[13][24],a,c);return b(R[3],-1,d)}var
us=[0,[0,[0,ur,[1,[5,a(O[16],t[2][8])],uq,0]],up],uo];function
ut(d,c,a){var
e=b(t[13][24],a,c);return b(R[3],d,e)}var
uv=[1,[5,a(O[16],t[2][8])],uu,0],uy=[0,[0,[0,ux,[1,[5,a(O[16],d7[6])],uw,uv]],ut],us];S(t[10][8],ad,uz,0,0,uy);var
uA=0;function
uB(c,a){var
d=b(t[13][24],a,c);return b(R[2],-1,d)}var
uE=[0,[0,[0,uD,[1,[5,a(O[16],t[2][8])],uC,0]],uB],uA];function
uF(d,c,a){var
e=b(t[13][24],a,c);return b(R[2],d,e)}var
uH=[1,[5,a(O[16],t[2][8])],uG,0],uK=[0,[0,[0,uJ,[1,[5,a(O[16],d7[6])],uI,uH]],uF],uE];S(t[10][8],ad,uL,0,0,uK);var
gM=[0];aw(650,gM,"Micromega_plugin.G_micromega");aw(651,[0,ei,n,i,l,N,ap,bT,R,gM],"Micromega_plugin");return}
