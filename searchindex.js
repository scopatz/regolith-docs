Search.setIndex({docnames:["api/app","api/basebuilder","api/broker","api/builder","api/chained_db","api/commands","api/cvbuilder","api/database","api/dates","api/deploy","api/htmlbuilder","api/index","api/interactive","api/main","api/runcontrol","api/tools","api/validators","broker","collections/abstracts","collections/assignments","collections/blog","collections/citations","collections/courses","collections/expenses","collections/grades","collections/grants","collections/groups","collections/index","collections/institutions","collections/jobs","collections/news","collections/people","collections/presentations","collections/projects","collections/proposals","collections/refereeReports","collections/students","commands/add","commands/app","commands/build","commands/classlist","commands/deploy","commands/email","commands/grade","commands/index","commands/ingest","commands/json-to-yaml","commands/rc","commands/store","commands/validate","commands/yaml-to-json","index","rc"],envversion:{"sphinx.domains.c":1,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":1,"sphinx.domains.javascript":1,"sphinx.domains.math":2,"sphinx.domains.python":1,"sphinx.domains.rst":1,"sphinx.domains.std":1,"sphinx.ext.viewcode":1,sphinx:56},filenames:["api/app.rst","api/basebuilder.rst","api/broker.rst","api/builder.rst","api/chained_db.rst","api/commands.rst","api/cvbuilder.rst","api/database.rst","api/dates.rst","api/deploy.rst","api/htmlbuilder.rst","api/index.rst","api/interactive.rst","api/main.rst","api/runcontrol.rst","api/tools.rst","api/validators.rst","broker.rst","collections/abstracts.rst","collections/assignments.rst","collections/blog.rst","collections/citations.rst","collections/courses.rst","collections/expenses.rst","collections/grades.rst","collections/grants.rst","collections/groups.rst","collections/index.rst","collections/institutions.rst","collections/jobs.rst","collections/news.rst","collections/people.rst","collections/presentations.rst","collections/projects.rst","collections/proposals.rst","collections/refereeReports.rst","collections/students.rst","commands/add.rst","commands/app.rst","commands/build.rst","commands/classlist.rst","commands/deploy.rst","commands/email.rst","commands/grade.rst","commands/index.rst","commands/ingest.rst","commands/json-to-yaml.rst","commands/rc.rst","commands/store.rst","commands/validate.rst","commands/yaml-to-json.rst","index.rst","rc.rst"],objects:{"regolith.app":{collection_page:[0,1,1,""],root:[0,1,1,""],shutdown:[0,1,1,""],shutdown_server:[0,1,1,""]},"regolith.broker":{Broker:[2,2,1,""],load_db:[2,1,1,""]},"regolith.broker.Broker":{add_file:[2,3,1,""],from_rc:[2,3,1,""],get_file:[2,3,1,""]},"regolith.builder":{builder:[3,1,1,""]},"regolith.builders":{basebuilder:[1,0,0,"-"],cvbuilder:[6,0,0,"-"],htmlbuilder:[10,0,0,"-"]},"regolith.builders.basebuilder":{BuilderBase:[1,2,1,""],LatexBuilderBase:[1,2,1,""]},"regolith.builders.basebuilder.BuilderBase":{build:[1,3,1,""],construct_global_ctx:[1,3,1,""],render:[1,3,1,""]},"regolith.builders.basebuilder.LatexBuilderBase":{build:[1,3,1,""],clean:[1,3,1,""],construct_global_ctx:[1,3,1,""],pdf:[1,3,1,""],render:[1,3,1,""],run:[1,3,1,""]},"regolith.builders.cvbuilder":{CVBuilder:[6,2,1,""]},"regolith.builders.cvbuilder.CVBuilder":{btype:[6,4,1,""],build:[6,3,1,""],clean:[6,3,1,""],construct_global_ctx:[6,3,1,""],latex:[6,3,1,""],pdf:[6,3,1,""],render:[6,3,1,""],run:[6,3,1,""]},"regolith.builders.htmlbuilder":{HtmlBuilder:[10,2,1,""]},"regolith.builders.htmlbuilder.HtmlBuilder":{abstracts:[10,3,1,""],blog:[10,3,1,""],btype:[10,4,1,""],build:[10,3,1,""],cname:[10,3,1,""],construct_global_ctx:[10,3,1,""],finish:[10,3,1,""],jobs:[10,3,1,""],nojekyll:[10,3,1,""],people:[10,3,1,""],projects:[10,3,1,""],render:[10,3,1,""],root_index:[10,3,1,""]},"regolith.chained_db":{ChainDB:[4,2,1,""],ChainDBSingleton:[4,2,1,""]},"regolith.chained_db.ChainDB":{clear:[4,3,1,""],copy:[4,3,1,""],fromkeys:[4,3,1,""],get:[4,3,1,""],items:[4,3,1,""],keys:[4,3,1,""],new_child:[4,3,1,""],parents:[4,3,1,""],pop:[4,3,1,""],popitem:[4,3,1,""],setdefault:[4,3,1,""],update:[4,3,1,""],values:[4,3,1,""]},"regolith.commands":{add_cmd:[5,1,1,""],app:[5,1,1,""],build:[5,1,1,""],classlist:[5,1,1,""],deploy:[5,1,1,""],grade:[5,1,1,""],ingest:[5,1,1,""],json_to_yaml:[5,1,1,""],validate:[5,1,1,""],yaml_to_json:[5,1,1,""]},"regolith.database":{connect:[7,1,1,""],dump_database:[7,1,1,""],dump_git_database:[7,1,1,""],dump_hg_database:[7,1,1,""],dump_local_database:[7,1,1,""],load_database:[7,1,1,""],load_git_database:[7,1,1,""],load_hg_database:[7,1,1,""],load_local_database:[7,1,1,""],open_dbs:[7,1,1,""]},"regolith.dates":{date_to_float:[8,1,1,""],month_to_int:[8,1,1,""]},"regolith.deploy":{deploy:[9,1,1,""],deploy_git:[9,1,1,""],deploy_hg:[9,1,1,""],ensure_deploy_dir:[9,1,1,""]},"regolith.main":{create_parser:[13,1,1,""],main:[13,1,1,""]},"regolith.runcontrol":{NotSpecified:[14,5,1,""],NotSpecifiedType:[14,2,1,""],RunControl:[14,2,1,""],ensuredirs:[14,1,1,""],exec_file:[14,1,1,""],filter_databases:[14,1,1,""],flatten:[14,1,1,""],ishashable:[14,1,1,""],load_json_rcfile:[14,1,1,""],load_rcfile:[14,1,1,""],touch:[14,1,1,""],warn_forbidden_name:[14,1,1,""]},"regolith.tools":{all_docs_from_collection:[15,1,1,""],awards_grants_honors:[15,1,1,""],date_to_rfc822:[15,1,1,""],dbdirname:[15,1,1,""],dbpathname:[15,1,1,""],dereference_institution:[15,1,1,""],document_by_value:[15,1,1,""],fallback:[15,1,1,""],filter_grants:[15,1,1,""],filter_projects:[15,1,1,""],filter_publications:[15,1,1,""],fuzzy_retrieval:[15,1,1,""],gets:[15,1,1,""],latex_safe:[15,1,1,""],latex_safe_url:[15,1,1,""],make_bibtex_file:[15,1,1,""],month_and_year:[15,1,1,""],number_suffix:[15,1,1,""],rfc822now:[15,1,1,""]},"regolith.validators":{always_false:[16,1,1,""],always_true:[16,1,1,""],ensure_database:[16,1,1,""],ensure_databases:[16,1,1,""],ensure_email:[16,1,1,""],ensure_store:[16,1,1,""],ensure_stores:[16,1,1,""],ensure_string:[16,1,1,""],is_bool:[16,1,1,""],is_int:[16,1,1,""],is_string:[16,1,1,""],noop:[16,1,1,""],to_bool:[16,1,1,""]},regolith:{app:[0,0,0,"-"],broker:[2,0,0,"-"],builder:[3,0,0,"-"],chained_db:[4,0,0,"-"],commands:[5,0,0,"-"],database:[7,0,0,"-"],dates:[8,0,0,"-"],deploy:[9,0,0,"-"],main:[13,0,0,"-"],runcontrol:[14,0,0,"-"],tools:[15,0,0,"-"],validators:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","data","Python data"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:data"},terms:{"0bxupd34yizzredbcmejny2fubnc":31,"16th":32,"18kj_conserv":32,"18sb04_kentstat":32,"18sb_nslsii":32,"18sob_clustermin":32,"18th":8,"1902natur":35,"1nzxqol":25,"1umax_kfzk9ugyyf6wwtllwgitvhatbkaf8":31,"21st":32,"56b4eb6d421aa921504ef2a9":30,"abstract":[10,27,32,51],"boolean":[16,31,52],"case":[4,15,32],"class":[2,5,6,10,11,14,17,18,19,22,40],"default":[4,15,31,52],"final":[19,22],"float":[8,19,22,23,24,25,31,34],"function":[14,17,32],"import":[12,17,35],"int":[22,29,30],"long":29,"new":[4,17,27,28,51],"public":[15,18,20,26,29,30,31,33,35,51,52],"return":[2,3,4,7,14,15,16],"short":[17,20,23,25,31,34,36],"static":52,"true":[12,15,16,31,52],AMS:31,CVs:[6,51],DBs:11,For:[11,14,51,52],Not:[31,51],The:[2,7,13,15,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,51,52],These:52,With:[17,51],__dict__:14,_build:2,_dbpath:52,_dict:14,_getitem__:4,_id:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51],_static:33,_updat:14,_valid:14,aaron:[21,25],abl:51,about:[19,25,26,32,33,34,52],abov:35,academicyear:25,acceler:[25,34],accept:[25,32,34,35],access:[2,17,26],accord:15,account:25,achiev:22,across:17,act:51,action:51,activ:[12,22,31,52],actual:[15,20,25,34],add:[2,5,10,15,17,35,40,44,51,52],add_cmd:5,add_fil:[2,17],added:49,adding:[44,49],addit:[1,6,10],addition:21,address:[15,17,28,31,36],adjectivis:15,admin:25,administ:25,adopt:33,advis:31,affili:17,after:17,against:[5,15],agenc:[25,34],agent:[31,33],aid:[29,32],ajunct:31,aka:[15,20,26,28,30,31,36],alia:15,alias:[31,36],all:[1,4,5,6,10,15,28,51,52],all_docs_from_collect:15,allow:[23,25,31,32,34,35,52],almost:52,along:42,alreadi:[16,48],also:[4,17,31,49,52],alwai:52,always_fals:16,always_tru:16,american:31,amit:21,among:17,amount:[15,25,34],amsmath:17,amssymb:17,analysi:[18,31],analyt:25,andso:32,andvari:28,ani:[15,17,25,31,32,35],anoth:52,answer:25,anthoni:[20,21,25,26,30,31,33,34],anyof_typ:[19,24,52],anyth:32,anywher:35,apam:[28,31,32],apart:32,api:2,app:[5,11,44,51],appl:31,appli:[17,28,29,52],applic:[11,29,32],applicatn:29,approach:[25,35],appropri:44,approri:3,approv:34,arg:[4,13],argpars:14,argument:[37,38,39,40,41,42,43,44,45,46,47,48,49,50],around:15,articl:21,asap:29,ashutosh:21,asi:35,assign:[22,24,27,51],assist:31,associ:[2,23,31,32],atom:32,attach:42,attribut:14,aug:34,august:[8,31],austin:31,auther:17,author:[15,17,18,20,21,26,30,32,34,35],autom:[26,44],avail:[15,33,40,44,51,52],avatar:31,avatars1:31,award:[15,25,31,32,34],awards_grants_honor:15,backend:2,background_field:29,backup:15,baptist:18,barbara:31,barrier:33,base:[6,8,11,17,18,25,29,31,33,51],basebuild:11,bash:29,beach:32,been:[14,17,25,31,33,34],befor:52,begin:[17,32],begin_dai:[25,32],begin_month:[25,31,32,33],begin_year:[25,31,32,33],being:[1,6,10,22,35],believ:[31,35],below:51,benefit_of_collabor:[25,34],best:29,bib:45,bibtex:[15,21],bibtexpars:21,big:[28,31],big_c:33,billing:34,bin:49,bio:31,biograph:31,blog:[10,27,51],bodi:[30,34,42],boilerpl:17,bold:15,bonazzi:21,book:51,bool:[15,22,29],both:27,bound:22,brian:21,brief:33,broker:[11,51],brookhaven:31,brown:31,btype:[3,6,10],build:[1,5,6,10,17,35,44,51,52],build_target:39,builddir:2,builder:[11,17],builderbas:1,built:[1,6,9,10,44],busi:23,california:31,call:[51,52],call_for_propos:[25,34],can:[2,17,49,52],cancel:32,canon:[28,31],capabl:31,carolina:[25,26,31],case_sensit:15,categori:[19,22,31,35],cec:[26,31],center:[28,31],central:11,centrali:17,centuri:32,ceremoni:31,cfn:32,chain:11,chaindb:4,chaindbsingleton:4,chained_db:11,chainmap:4,challeng:32,cheaper:35,check:15,chemistri:[28,31],chicago:31,chmod:49,choos:52,christoph:21,chunck:17,cimrman:21,citat:[15,27,31,51],citi:[28,31,32],claim:35,claimed_found_what:35,claimed_why_import:35,classlist:[5,44,51],classmethod:[2,4],clean:[1,6],clear:4,cli:[11,13,17,51],client:[7,15],clustermin:32,cmd:[1,6,10,44],cname:10,cnerg:31,coauthor:18,code:[22,28,29,31,33],col:12,coll:[31,37,45],collab:31,collabor:31,collect:[2,5,15,20,21,22,23,25,28,29,30,31,32,33,34,35,36,37,44,45,49,52],collection_pag:0,collnam:[0,15],colloquium:32,columbia:[17,25,28,31,34],columbiau:[28,32],com:[20,25,31,33,34],combin:5,command:[1,6,10,11,14,52],comment:35,commit:[26,49],commmand:51,common:51,compar:15,compens:29,compil:[1,6],complet:52,complex:25,compon:11,compos:14,comput:[15,21,26,29],cond:15,conda:51,confer:[18,32],config:[2,52],configur:[14,51],conflict:52,confus:31,connect:[7,52],construct:[1,6,10],construct_global_ctx:[1,6,10],contact:[18,26,29],contain:[21,27,28,31,51,52],content:[20,51],context:[1,6,7,10],continu:29,contributed_or:32,control:[11,29,44,52],convent:31,convert:[5,8,15,16,44,46,50],coorespond:52,copi:[4,15,17,48,52],copyright:4,core:32,cosmob:31,could:[17,52],countri:[28,32],cours:[19,24,27,31,40,42,51],course_id:[40,42],cover:31,cream:35,creat:[1,2,4,6,15,51],create_pars:13,currenc:[23,25,31,34],current:[15,29,31,39,40,45],curri:21,cvbuilder:11,cwright:17,cycl:[26,31,33,51],cyclass:18,cyclu:[18,23,29,31,33],cython:31,dai:[8,20,23,25,29,30,34],data:[11,15,25,29,30,31,33,34,44,52],databas:[2,5,6,9,11,14,15,16,17,23,37,40,42,44,45],dataset:16,date:[11,15,29],date_to_float:8,date_to_rfc822:15,dbdirnam:15,dbname:0,dbpath:52,dbpathnam:15,dbs:[7,16],debug:[38,43],decemb:25,declin:[25,32,34,35],decor:15,dedic:29,deep:20,deeper:51,defin:51,degre:31,delin:25,demonstr:31,denot:21,densiti:31,depart:[17,22,26,28,31,32],department:32,deploi:[5,11,44,51],deploy:[5,11,52],deploy_git:9,deploy_hg:9,dept:28,derefer:15,dereference_institut:15,describ:[22,25,29,30,31,32,33,52],descript:[29,31,33],design:25,dest:52,destin:10,detail:11,determin:[25,34,40],develop:[4,18,25,29,51],dhsu:[25,34],diagnost:31,dict:[1,2,4,6,10,15,22,23,25,28,31,33,34,52],dictionari:[14,51,52],did_how:35,did_what:35,didn:35,differ:[2,17,28,51],difficult:17,diffjourn:35,dir:[1,6,9,10,15,52],directori:[14,15,17,52],disciplin:29,discover:[23,32],discoveri:[25,34],discret:[31,33],disk:2,dissert:31,distribut:32,dive:51,divis:28,dmref15:[25,33,34],dmref:[25,34],doc:[17,25,31,51],docment:2,doctor:[29,30,31],document:[2,5,15,17,25,31,37,48],document_by_valu:15,documentclass:17,doe:[4,16,25,40],doi:18,don:[15,35,39],done:[15,35],down:[7,14],download:35,drive:31,driven:29,dry:40,dst:[9,52],due:34,dump:7,dump_databas:7,dump_git_databas:7,dump_hg_databas:7,dump_local_databas:7,durat:[31,34],dure:[25,39],duti:29,e103:21,each:[10,16,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51],earn:24,earth:31,edit:[25,31],editor:15,editor_eyes_onli:35,edu:[18,26,29,31,36],educ:31,either:[4,15,17],element:15,els:4,elsewher:31,email:[16,18,26,31,36,44,51,52],email_target:42,emch552:22,emch:[19,22,24,31],emeritu:31,employ:31,empti:[4,15],enabl:49,end:[17,25,32],end_dai:[25,32],end_month:[25,31,32,33],end_year:[25,31,32,33],energi:[26,31,32],engin:[25,26,28,29,31],enrol:22,ensur:[7,9,14,16],ensure_databas:16,ensure_deploy_dir:9,ensure_email:16,ensure_stor:16,ensure_str:16,ensuredir:14,entri:[6,15,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51,52],entrytyp:21,equal:22,equat:31,equival:[14,21],erg:[2,26,30,31,51],erich:31,ert:21,essenti:31,etc:[31,48,52],even:51,everi:[15,51],everyon:17,exampl:[2,15,17,27,52],exec_fil:14,execfil:14,exist:[9,14,48],exit:[37,38,39,40,41,42,43,44,45,46,47,48,49,50],expect:[15,29],expens:[27,51],expense_typ:23,experi:29,expert:31,expertis:29,extens:40,extract:32,fabian:21,facet:51,facil:[31,33],faction:22,fallback:15,fals:[2,15,16,22,29,31,52],februari:[30,34],feel:51,fellow:31,fernando:21,field:[21,31,32,52],figshar:18,figur:[17,39],figurebuild:17,file:[1,2,6,10,14,15,19,22,23,24,31,40,44,45,46,48,50,51,52],filenam:[2,14,24,40,45],filepath:2,filesystem:2,filesystemcli:7,fill:32,filter:[14,15],filter_databas:14,filter_gr:15,filter_project:15,filter_publ:15,final_assess:35,find:15,fine:34,finish:10,first:[15,18,35],first_author_last_nam:35,firstnam:18,fish:29,fit:35,flag:29,flanagan:[30,34],flash4:31,flash:31,flask:[0,5,44],flatten:14,floatfix:17,fname:[1,6,10,14],focu:26,folder:52,follow:[4,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,49,51,52],forbidden:14,forc:[2,48],foreign:[5,44],forg:51,form:16,format:[15,31,37,40,45,52],former:10,fornam:14,forward:20,found:[14,35],foundat:[28,31],fraction:22,francesco:21,francisco:21,fredrik:21,free:51,freewrit:35,from:[2,4,6,10,12,14,15,22,31,32,40,44,45,51,52],from_rc:[2,17],fromkei:4,fuel:[26,31,33,51],fuelcycl:[29,33],full:[17,20,31,32,34],fulli:52,fund:[25,31],funder:25,furthermor:21,futur:25,fuzzy_retriev:15,gener:[3,14,15,18,26,31,51],get:[2,4,12,15],get_fil:[2,17],gg012345:25,git:[7,9,29,49,52],github:[31,33],githubusercont:31,given:[4,14,15,45],glb:14,global:[1,6,10,31],googl:[25,31],gov:34,gpa:31,grade:[5,22,27,39,42,44,51],graduat:[29,31],granger:21,grant:[15,27,31,33,34,51],grant_id:25,graphicx:17,graphit:32,graviti:35,greater:22,gritti:11,group:[2,17,20,23,25,27,29,30,31,33,34,51,52],groupmemb:32,groupthi:26,guid:31,gupta:21,hap42:36,hap:24,haperson:36,happen:22,harsh:21,has:[4,7,14,17,18,31,34],hashabl:14,haskel:29,have:[9,17,19,25,29,31,33,34,35,52],hdf5:31,hello:2,hello_world:17,help:[7,9,17,29,37,38,39,40,41,42,43,44,45,46,47,48,49,50],helper:[11,14],here:17,herein:52,high:[18,31],hold:[25,51],home:[2,31,51],home_address:31,homework:[19,22],honest:35,honor:[15,31],hook:49,hope:32,host:[25,26],hous:31,how:[29,35],howev:52,href:[26,29],htm:34,html:[9,10,18,26,39,52],htmlbuilder:11,http:[18,20,25,26,29,31,33,34,52],human:[20,22,24,36],hw01:19,hw02:24,hw_file:17,ice:35,identifi:[18,21,25,26,28,29,30,31,33,36,40,42,51,52],ids:19,ill:25,imag:[48,52],implement:5,impress:35,improv:26,ina:31,inc:21,includ:[18,25,26,29],includegraph:17,inde:34,index:10,individu:[29,31],infer:45,inform:[0,18,19,21,24,25,26,29,31,33,34,35,40,44,52],ingest:[5,44,51],inistitut:18,initi:31,innam:14,inplac:15,inprogress:35,input:16,input_gr:15,input_record:15,insid:[17,52],inspect:44,instanc:[2,7],institut:[15,18,25,26,27,31,32,34,51],institutionsin:28,instruct:22,intact:4,integ:[8,15,16,19,20,23,24,25,31,32,33,34],integr:29,interact:11,interest:[15,29],interfac:[2,11,17,52],intern:52,intro:31,introduct:31,invers:25,investig:[26,34],invit:32,involv:[15,26],is_bool:16,is_int:16,is_str:16,ishash:14,isn:17,isuru:21,item:4,itemized_expens:23,iter:[4,14,15],its:[4,14,15,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,52],itself:[2,18,51],ivanov:21,jan:[21,23],januari:31,jason:21,job:[10,27,51],johansson:21,join:30,journal:[21,35],json:[2,5,14,17,27,37,40,44,51,52],json_to_yaml:5,juli:[29,33],june:33,just:[16,51],keep:14,kei:[4,15,16,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51],keyerror:4,keynot:32,know:20,knowledg:29,known:[28,31],kulal:21,kumar:21,kwarg:[1,6,10,14],laboratori:31,lack:4,land:31,langmuir:31,languag:[29,31],larg:26,larger:28,laser:31,last:[18,35],lastnam:18,latex:[1,6,15],latex_saf:15,latex_safe_url:15,latexbuilderbas:1,lead:33,learn:25,least:29,leav:4,length:19,level:[16,31,51],librari:51,life:31,like:[4,14,20,21,22,23,29],limit:17,line:[5,11,26,42,52],link:7,list:[1,5,6,10,14,15,16,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51,52],load:[2,7,9,14,52],load_databas:7,load_db:[2,17],load_git_databas:7,load_hg_databas:7,load_json_rcfil:14,load_local_databas:7,load_rcfil:14,loc:14,local:[2,7,32,52],locat:[2,31,32,44,52],logo:33,look:0,love:29,low:33,lower:22,machin:[17,25],made:[23,32],madison:[18,31],magnet:31,mai:[25,31,51,52],main:[11,30],maintain:29,mainten:29,major:31,majoredit:35,make:[15,29,32],make_bibtex_fil:15,man:39,manag:[7,29,51],mani:[44,51],map:[4,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36],master:31,match:[15,30],materi:[25,31,33,34],mateusz:21,mathemat:[17,28,29,31],matplotlib:17,matthew:21,mean:[14,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36],meaning:16,measur:35,mechan:[26,29,31],meet:32,meeting_nam:32,member:[10,17,20,25,31,34,51],membership:31,memori:32,messag:[37,38,39,40,41,42,43,44,45,46,47,48,49,50],metadata:[2,36],metal:32,method:[4,25,26,34],meurer2016sympi:21,meurer:[21,25],michael:31,midterm:22,mind:51,minor:31,misc:15,mission:26,mission_stat:26,mode:[38,43,52],model:[18,25,26,31],modifi:44,monei:35,mongo:[27,51],mongocli:7,mongod:52,mongodb:[7,37,51,52],mongodbpath:2,month:[8,15,20,21,23,25,29,30,31,34,35],month_and_year:15,month_to_int:8,moor:21,more:[21,26,28,29,35,51],most:[23,29],mostli:31,mouginot:18,move:[10,20],msg:25,mtime:14,much:35,muller:21,multi:15,multi_pi:15,multipl:15,must:[51,52],myfil:2,myprops:34,name:[1,2,6,9,10,14,15,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,40,42,45,46,48,50,52],namespac:14,nanoparticl:32,nanostructur:[25,32,34],narr:[25,34],nation:31,natur:35,need:[14,17,52],nest:14,network:18,neural:18,neutral:31,new_child:4,nice:32,nif:31,nojekyl:10,none:[2,4,9,13,14,15,34,52],noop:16,normal:[29,30,31,33,52],note:[1,2,6,10,15,17,22,25,32,52],noth:16,notion:51,notspecifi:14,notspecifiedtyp:14,nov:31,novel:[25,34],nsf14591:34,nsf:[25,34],nsl:[31,32],nuclear:[26,29,31,33],number:[15,19,22,24,25,26,29,34,52],number_suffix:15,numfocu:25,object:[2,4,14,15],obtain:[22,31],octob:25,omega:31,ond:21,one:[15,29,48,51,52],ones:14,ongo:31,onli:[14,40,49,52],opac:31,opacplot:31,open:[7,14,26,29,31],open_db:7,oper:52,operat:40,option:[15,18,19,20,22,23,24,25,26,28,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,52],orcid:31,orcid_id:31,order:[15,52],org:[18,29,33],organ:[28,31],origin:20,original_curr:23,other:[17,21,25,26,29,31,33,34,52],other_agencies_submit:34,our:[25,26],over:[10,35],overall_purpos:23,overlap:25,overrid:52,overridden:52,packag:51,page:[21,26,51],pair:[4,32],paper:[17,18,35],paprocki:21,paramet:[1,2,6,7,10,15],parent:4,part:[18,26,31],particip:[25,34],partnership:31,pass:[35,52],past:31,path:[2,14,15,17,19,24,48,52],payback:33,paye:23,payment:23,pdf:[1,6,22,34,39,48,52],pedregosa:21,peerj:21,pend:[25,34,39],peopl:[10,12,15,17,27,33,51,52],perform:[18,40],person:[10,15,22,24,29,30,31,35,36],person_dir:15,person_months_academ:25,person_months_summ:25,physic:[9,17,28,29,31,32],physicsand:28,pi_nam:[15,26],pid:15,piec:17,pip:51,place:14,placehold:15,plasma:31,pleas:[26,29],plenari:32,plot:17,plt:17,png:[17,33],point:[19,24,51],pop:4,popitem:4,pose:25,posit:[25,29,31,33,34,37,39,40,42,45,46,48,50],posix:14,possibl:[15,19],post:[20,29,30,31],postal:28,postdocad:39,postdoctor:31,poster:32,potenti:[15,29],power:[19,24,31,51],practic:29,prb:17,pre:[18,34,49],preced:52,predict:26,predictor:18,prefer:29,prep:[25,32,34],present:[4,18,23,27,31,51,52],preslist:39,previou:[4,29],princip:34,principl:26,print:44,prior:29,privat:[22,23,24,35,36,52],probabl:[35,36],probe:31,problem:25,produc:39,prof:29,profession:31,professor:31,program:[25,29,31],programm:[29,31],project:[10,15,17,21,23,26,27,29,32,51],prompt:25,prop:39,properli:7,properti:[2,4],propos:[25,27,51],provid:[4,17,31,49,52],pub:[15,34],publish:21,publist:39,pull:32,purpos:23,push:17,put:[15,52],pxiboydm:31,pyne:[29,31],pypi:51,pyplot:17,python:[14,21,29,31],qdu:[25,34],qualiti:18,quantif:26,quarter:22,question:[15,19,24],radiat:31,rais:4,rang:17,rapid:33,rathnayak:21,rc_file:2,reactor:31,read:40,readabl:20,real:14,realli:35,reason:23,receiv:42,recommend:35,record:[15,23,44],recycl:31,ref:4,refer:[2,18,35],refere:35,refereereport:[27,51],registri:40,regolith:[17,27,37,38,39,40,41,42,43,45,46,47,48,49,50,52],regolithrc:[2,17,52],regro:[17,51],regular:25,reimb:39,reject:[34,35],releas:[25,29],remind:32,remot:[17,52],remov:[1,4,6,10],renam:14,render:[1,6,10],renew:31,replac:[15,17,40],repo:33,report:[35,40],repositori:17,repost:20,repres:[4,20,25,29,34,52],represent:[20,23,25,34,36],request:15,requir:[18,19,20,23,24,25,26,28,31,32,33,34,35,36],research:[20,25,26,29,30,31,33,51,52],resourc:[5,44,52],respect:25,restructur:42,result:[1,4,6,10,40],resum:[29,39],retriev:15,retriv:17,revers:15,review:[29,35,39],revolution:25,revtex4:17,rfc822now:15,rfc:15,richard:21,robert:[21,30,34],rocklin:21,root:[0,10,52],root_index:10,row:51,rss:10,ruler:35,run:[1,5,6,10,11,17,40,44,52],runcontrol:[2,7,11],s8jl1_nzdqaj:25,saboo:21,safe:15,salari:29,same:[14,21,48,51],sampl:51,san:21,santa:31,sartaj:21,save:17,savefig:17,sbilling:[34,35],scale:22,schema:[5,27,51],schlieren:31,schneider:31,scholar:[29,30,31],scholarship:31,school:[28,40],scienc:[21,28,29,31],scientif:29,scientist:31,scopatz:[20,21,23,25,26,29,30,31,32,33,34],scopatzatcec:29,scope:25,score:24,sea:28,sean:21,season:22,see:[20,21,52],seek:29,segregated_expens:23,select:52,self:[1,6,10],semant:16,semest:22,seminar:32,seminaror:32,send:[29,42,52],sensit:52,sent:34,separ:14,septemb:[20,25],seq:15,sequenc:[14,15],sergiu:21,server:[38,43],servic:31,session:11,set:[4,5,15,51],setdefault:4,setup:7,shadowgraphi:31,share:[17,25,31],shell:[29,44,51],shivam:21,should:[21,23,24,29,30,32,35,36,40,42,52],show:[37,38,39,40,41,42,43,44,45,46,47,48,49,50],showpac:17,shutdown:0,shutdown_serv:0,similar:[29,31,52],simon:34,simpli:51,simul:[26,31,33,51],singh:21,singl:4,singleton:[4,14],site:31,skill:[29,31],slightli:17,small:25,smalledit:35,smith:21,societi:31,softwar:[29,31,51],solar:31,solut:19,some:[34,51],someth:[16,26],sort:15,sourc:[0,1,2,3,4,5,6,8,9,10,13,14,15,16,29,33,52],south:[25,26,31],specif:15,src:[9,52],start:[25,29,35,38,43,44],start_dat:29,state:[28,31,32],statement:[14,26],statu:[25,32,34,35],sting:52,storag:[2,17,44,48],store:[2,16,19,22,24,44,51],storenam:48,stori:30,str:[1,2,6,10,15,21,22,29,30,52],street:31,string:[15,16,18,19,20,21,23,24,25,26,28,29,31,32,33,34,35,36,51,52],structur:32,student:[22,24,27,29,31,51],studi:35,sub:15,subaward_amount:[25,34],subclass:4,subject:42,submiss:[18,26],submit:[18,32,34,35],success:32,suffix:15,sumith:21,summari:35,summer:25,sundai:31,sunni:32,support:[25,33],syllabu:[22,31],symbol:21,sympi:[21,25],symposia:32,synergi:25,system:[2,17,29,31,51],tabl:51,take:22,tape:32,target:[5,9,39,42,44,52],taught:[22,31],teach:31,team:[18,25,33,34],technic:51,techniqu:26,templat:[1,6,10,52],temporari:52,test:[14,16,23,29,42],tex:17,texa:31,text:[18,30,31,42],than:[22,51],thei:17,them:[10,15,52],thepresent:32,thesi:31,thi:[1,2,4,6,10,14,15,17,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],thilina:21,thing:[1,6,10,20,21,35],think:52,those:[11,15,51],though:51,through:26,time:[15,18,31],timestamp:18,titl:[17,18,19,20,21,25,26,29,31,32,34,35],tname:[1,6,10],to_bool:16,tool:[11,26,51],toolkit:31,top:[16,51],torn:7,total:15,touch:[10,14],tour:31,train:18,transact:33,travel:[23,31],travi:[2,52],trip:32,tupl:15,twocolumn:17,txt:2,type:[2,3,4,7,15,18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,45,51],typic:[24,25,34],u201ccyclass:18,u201d:18,uchicago:31,ucni_axlwmxtrdd3iwqw0mzbo65cevdrsxzm:25,unallow:23,uncertainti:26,under:[25,31,35],undergradu:31,uni:36,uniform:17,uniqu:[18,19,21,22,24,26,28,29,30,31,32,33,51],unit:28,univers:[17,18,25,26,28,31,36],university_id:36,unlik:14,unsegregated_expens:23,unspecifi:52,unstructur:52,unviers:[25,34],updat:[4,14,40,44,52],upton:32,uranium:31,url:[9,15,20,26,31,33,52],url_check:15,usa:[21,28],usag:[37,38,39,40,41,42,43,44,45,46,47,48,49,50],usc:40,usd:[25,34],use:[17,51,52],used:[4,17,28,35,52],useful:[29,31,52],usepackag:17,user:[2,14,31,32,51],user_config:2,using:[1,6,10,25,31],usp:[25,31],usual:51,util:31,valid:[5,11,25,34,39,44,45,51],valu:[4,5,14,15,22,23,25,31,32,34,35,40,52],variou:[17,44],vat:21,veri:34,version:[14,29],via:[17,52],video:31,view:4,vig:21,vision:20,visit:[26,31],volum:21,wai:[16,17,35],wallab:31,want:[11,35,51],warn:[14,31],warn_forbidden_nam:14,warship:32,wave:35,weather:32,web:11,webpag:26,websit:[11,26,31,33,51,52],week:32,weight:22,welcom:51,well:[16,42],were:17,what:[9,32,35,44,52],whatev:52,when:[4,15,18,22,35,52],where:[15,28,32,35,52],whether:[22,29,52],which:[2,7,14,15,17,25,39,52],who:[4,11,22,33,51],whose:40,wilson:18,wingit:35,wisc:18,wisconsin:[18,31],withinth:31,word:35,work:[25,29,33],workshop:[18,51],world:28,would:[15,17,20,52],wpjhdm8njia:25,wrap:15,wrapper:15,wright:12,write:32,written:[20,35],www:[26,31,34],xonsh:[4,29],yaml:[5,27,44,51,52],yaml_to_json:5,year:[8,15,20,21,22,23,25,29,30,31,32,34,35],yield:15,yml:52,york:[17,28],you:[11,17,29,35,52],your:[35,51],zip:[28,31]},titles:["Web Application (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.app</span></code>)","Builder Base Class (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.basebuilder</span></code>)","Data Broker (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.broker</span></code>)","Builders (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builder</span></code>)","Base class for chaining DBs (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.chained_db</span></code>)","CLI Commands (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.commands</span></code>)","CV Builder (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.cvbuilder</span></code>)","Database Interface Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.database</span></code>)","Date Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.dates</span></code>)","Deployment Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.deploy</span></code>)","Website Builder (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.builders.htmlbuilder</span></code>)","Regolith API","Interactive Sessions (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.interact</span></code>)","Command Line Interface (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.main</span></code>)","Run Controlers (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.runcontrol</span></code>)","Tools (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.tools</span></code>)","Run Control Validators (<code class=\"docutils literal notranslate\"><span class=\"pre\">regolith.validators</span></code>)","Broker","Abstracts","Assignments","Blog","Citations","Courses","Expenses","Grades","Grants","Groups","Collections","Institutions","Jobs","News","People","Presentations","Projects","Proposals","Refereereports","Students","add","app","build","classlist","deploy","email","grade","Regolith Commands","ingest","json-to-yaml","rc","store","validate","yaml-to-json","Regolith","Top-level Configuration Keys"],titleterms:{"abstract":18,"class":[1,4],"new":30,DBs:4,add:37,api:[11,51],app:[0,38],applic:0,assign:19,base:[1,4],basebuild:1,blacklist:52,blog:20,broker:[2,17],build:39,builddir:52,builder:[1,3,6,10],chain:4,chained_db:4,citat:21,classlist:40,cli:[5,52],client:52,cmd:52,cname:52,coll:52,collect:[27,51],command:[5,13,44,51],configur:52,control:[14,16,51],cours:22,cvbuilder:6,data:2,databas:[7,51,52],date:8,debug:52,deploi:[9,41,52],deploy:9,deploydir:52,document:52,email:42,exampl:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,51],expens:23,file:17,filenam:52,from:17,grade:[24,43],grant:25,group:26,groupnam:52,htmlbuilder:10,ingest:45,insert:17,instal:51,institut:28,interact:12,interfac:[7,13],job:29,json:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,46,50],kei:52,level:52,line:13,load:17,main:13,misc:49,mongo:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36],mongodbpath:52,peopl:31,present:32,project:33,propos:34,public_onli:52,refereereport:35,regolith:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,44,51],retriev:17,run:[14,16,51],runcontrol:14,schema:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,52],session:12,set:52,site:51,static_sourc:52,store:[17,48,52],student:36,tool:[7,8,9,15],top:52,tutori:51,usag:12,user:52,usual:52,valid:[16,49],web:0,websit:10,yaml:[18,19,20,21,22,23,24,25,26,28,29,30,31,32,33,34,35,36,46,50]}})