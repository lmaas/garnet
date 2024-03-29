"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1380],{4377:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(4848),t=i(8453);const r={id:"transactions",sidebar_label:"Transactions",title:"Transactions"},o="Transactions",a={id:"dev/transactions",title:"Transactions",description:"Garnet supports two types of transactions:",source:"@site/docs/dev/transactions.md",sourceDirName:"dev",slug:"/dev/transactions",permalink:"/garnet/docs/dev/transactions",draft:!1,unlisted:!1,editUrl:"https://github.com/microsoft/garnet/tree/main/website/docs/dev/transactions.md",tags:[],version:"current",frontMatter:{id:"transactions",sidebar_label:"Transactions",title:"Transactions"},sidebar:"garnetDocSidebar",previous:{title:"Locking",permalink:"/garnet/docs/dev/tsavorite/locking"},next:{title:"Custom Commands",permalink:"/garnet/docs/dev/custom-commands"}},c={},d=[{value:"Custom Server-side Transactions",id:"custom-server-side-transactions",level:2},{value:"Client-Issued Transactions (Redis)",id:"client-issued-transactions-redis",level:2},{value:"Example",id:"example",level:3},{value:"Transaction Backend",id:"transaction-backend",level:3},{value:"TransactionManager Class Responsibilities",id:"transactionmanager-class-responsibilities",level:3},{value:"Storing the state of Transaction:",id:"storing-the-state-of-transaction",level:4},{value:"Queueing Commands:",id:"queueing-commands",level:4},{value:"Execution",id:"execution",level:4},{value:"Recovery Optimization",id:"recovery-optimization",level:3},{value:"Watch Command",id:"watch-command",level:3},{value:"Version Map",id:"version-map",level:4},{value:"Modified Bit",id:"modified-bit",level:4},{value:"Watch",id:"watch",level:4},{value:"Unwatch",id:"unwatch",level:4},{value:"Testing",id:"testing",level:3},{value:"READ_TXN",id:"read_txn",level:4},{value:"WRITE_TXN",id:"write_txn",level:4},{value:"READ_WRITE_TXN",id:"read_write_txn",level:4},{value:"WATCH_TXN",id:"watch_txn",level:4}];function l(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"transactions",children:"Transactions"}),"\n",(0,s.jsx)(n.p,{children:"Garnet supports two types of transactions:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Custom Server-side Transactions"}),"\n",(0,s.jsx)(n.li,{children:"Client-Issued Transactions (Redis)"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"custom-server-side-transactions",children:"Custom Server-side Transactions"}),"\n",(0,s.jsxs)(n.p,{children:["Custom transactions allows adding a new transaction and registering it with Garnet on the server side. This registered transaction can then be invoked from any Garnet client to perform a transaction on the Garnet server.\nRead more on developing custom server side transactions in the ",(0,s.jsx)(n.a,{href:"/garnet/docs/extensions/transactions",children:"Transactions page"})," under the Extensions section."]}),"\n",(0,s.jsx)(n.h2,{id:"client-issued-transactions-redis",children:"Client-Issued Transactions (Redis)"}),"\n",(0,s.jsxs)(n.p,{children:["You can read more here: ",(0,s.jsx)(n.a,{href:"https://redis.io/docs/manual/transactions",children:"Redis Transactions"}),". In this design, transaction operations come in a MULTI/EXEC scope. Every operation in this scope is part of the transaction.\nThe model does not allow you to use the result of reads inside the MULTI/EXEC scope but allows you to read and monitor keys before (i.e., watch), and if they are unchanged at the time of execution, the transaction will commit."]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"WATCH mykey\nval = GET mykey\nval = val + 1 # not Redis command this happens outside\nMULTI\nSET mykey $val\nEXEC\n"})}),"\n",(0,s.jsxs)(n.p,{children:["In the above example, if ",(0,s.jsx)(n.strong,{children:"mykey"})," changes before ",(0,s.jsx)(n.strong,{children:"EXEC"})," command, the transaction will abort since the calculation of ",(0,s.jsx)(n.em,{children:"val"})," is invalidated."]}),"\n",(0,s.jsx)(n.h3,{id:"transaction-backend",children:"Transaction Backend"}),"\n",(0,s.jsx)(n.p,{children:"Transactions in Garnet are implemented using the following classes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"TransactionManager"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WatchVersionMap"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"WatchedKeyContainer"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"RespCommandsInfo"})}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"transactionmanager-class-responsibilities",children:"TransactionManager Class Responsibilities"}),"\n",(0,s.jsx)(n.h4,{id:"storing-the-state-of-transaction",children:"Storing the state of Transaction:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Started"}),": Goes to this state after ",(0,s.jsx)(n.code,{children:"MULTI"})," command, TxnManager will queue any command in this state except EXEC"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Running"}),": Goes to this state after EXEC, TxnManager will run the queued commands in this state"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Aborted"}),": Goes to this state in case of anything bad happens"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"queueing-commands",children:"Queueing Commands:"}),"\n",(0,s.jsxs)(n.p,{children:["When TxnManager goes to ",(0,s.jsx)(n.em,{children:"Started"})," state, it will (1) queue any command afterward and (2) save any key that is used in those commands to lock at the execution time using 2PL.\nIn order to queue commands, they are ",(0,s.jsx)(n.strong,{children:"let to live in the network buffer"}),". Using the ",(0,s.jsx)(n.code,{children:"TrySkip"})," function in ",(0,s.jsx)(n.code,{children:"RespServerSession"}),". To lock the keys at the time of execution, we save pointers to the actual memory location of keys in the network buffer using an array of ",(0,s.jsx)(n.code,{children:"TxnKeyEntry"})," that has an ",(0,s.jsx)(n.code,{children:"ArgSlice"})," and the lock type (Shared or Exclusive)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"TrySkip"})," function uses ",(0,s.jsx)(n.code,{children:"RespCommandsInfo"})," class to skip the correct number of tokens and detects syntax errors. ",(0,s.jsx)(n.code,{children:"RespCommandsinfo"})," stores the number of ",(0,s.jsx)(n.code,{children:"Arity"})," or arguments of each command. E.g., the ",(0,s.jsx)(n.code,{children:"GET"})," command's arity is two. The command token ",(0,s.jsx)(n.code,{children:"GET"})," and one key. We store the minimum number of arguments with a negative value for the commands that can have multiple arguments. ",(0,s.jsx)(n.code,{children:"SET"})," command's arity is  -3 means that it requires at least three arguments (including command toke)."]}),"\n",(0,s.jsxs)(n.p,{children:["During the ",(0,s.jsx)(n.code,{children:"TrySkip"})," we call ",(0,s.jsx)(n.code,{children:"TransactionManager.GetKeys"}),", which goes over the arguments and stores ",(0,s.jsx)(n.code,{children:"TxnKeyEntry"})," for each key in the arguments."]}),"\n",(0,s.jsx)(n.h4,{id:"execution",children:"Execution"}),"\n",(0,s.jsxs)(n.p,{children:["When the the ",(0,s.jsx)(n.code,{children:"TxnState"})," is ",(0,s.jsx)(n.em,{children:"Started"})," and we encounter the ",(0,s.jsx)(n.code,{children:"EXEC"})," we call ",(0,s.jsx)(n.code,{children:"TransactionManager.Run()"}),". What this functions does:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["first acquires the ",(0,s.jsx)(n.code,{children:"LockableContext"})," for the main store and/or object store based on the store type."]}),"\n",(0,s.jsxs)(n.li,{children:["Goes over ",(0,s.jsx)(n.code,{children:"TxnKeyEntry"}),"s and locks all the needed keys."]}),"\n",(0,s.jsxs)(n.li,{children:["Calls ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer.ValidateWatchVersion()"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"It goes over all the watched keys and checks whether their version is the same as the time watch or not"}),"\n",(0,s.jsxs)(n.li,{children:["if it passes, we proceed with execution otherwise, we call ",(0,s.jsx)(n.code,{children:"TransactionManager.Reset(true)"})," to reset the transaction manager. The ",(0,s.jsx)(n.code,{children:"true"})," argument we pass to ",(0,s.jsx)(n.code,{children:"Reset"})," says that it also needs to unlock the keys."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"It writes the transaction start indicator in the AOF to recover atomically in case of failure in the middle of the transaction"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["After that, the TxnState is set to ",(0,s.jsx)(n.em,{children:"Running"})," and the network ",(0,s.jsx)(n.code,{children:"readHead"})," is set to the first command after ",(0,s.jsx)(n.code,{children:"MULTI"}),", and this time we start actually running those commands. When the execution reaches to EXEC again, and we are in ",(0,s.jsx)(n.em,{children:"Running"})," state, it calls ",(0,s.jsx)(n.code,{children:"TransactionManager.Commit()"}),". What it does:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Unlock all the keys that we locked in ",(0,s.jsx)(n.code,{children:"Run"})]}),"\n",(0,s.jsxs)(n.li,{children:["Reset ",(0,s.jsx)(n.code,{children:"TransactionManager"})," and ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer"})]}),"\n",(0,s.jsx)(n.li,{children:"It also appends the commit message to the AOF"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"recovery-optimization",children:"Recovery Optimization"}),"\n",(0,s.jsx)(n.p,{children:"Garnet does regular checkpoints and changes its version between those checkpoints. In order to get checkpoint consistency, we require transaction operations to have the same version or in other words be in the same checkpoint window."}),"\n",(0,s.jsx)(n.p,{children:"To enforce this right now, we do the following:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When TsavoriteStateMachine is in ",(0,s.jsx)(n.code,{children:"Prepare"})," phase, we do not let a transaction start execution to let checkpoint finish"]}),"\n",(0,s.jsxs)(n.li,{children:["If there is a running transaction and TsavoriteStateMachine moves to ",(0,s.jsx)(n.code,{children:"Prepare"})," we don't let version change happen until the transaction finishes the execution."]}),"\n",(0,s.jsxs)(n.li,{children:["These two happen using ",(0,s.jsx)(n.code,{children:"session.IsInPreparePhase"})," and two while loop at the beginning of ",(0,s.jsx)(n.code,{children:"Run"})," function"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"watch-command",children:"Watch Command"}),"\n",(0,s.jsx)(n.p,{children:"It is used to implement optimistic locking."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Provide a check-and-set (CAS) behavior to transactions."}),"\n",(0,s.jsx)(n.li,{children:"Keys are monitored in order to detect changes against them."}),"\n",(0,s.jsx)(n.li,{children:"If at least one watched key is modified before the EXEC  command, the whole transaction aborts"}),"\n",(0,s.jsxs)(n.li,{children:["It is implemented through a ",(0,s.jsx)(n.code,{children:"Modified"})," bit in ",(0,s.jsx)(n.code,{children:"TsavoriteKV"})," and a ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.code,{children:"VersionMap"})})," in ",(0,s.jsx)(n.code,{children:"Garnet"})]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"version-map",children:"Version Map"}),"\n",(0,s.jsx)(n.p,{children:"It Monitors modifications on the keys. Every time a watched key gets modified, we increment its version in the version map."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["It has been implemented through a ",(0,s.jsx)(n.code,{children:"Hash Index"})]}),"\n",(0,s.jsxs)(n.li,{children:["To prevent the overhead for normal operations in the critical path we only increment the version in some cases:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For in-memory records, we only increment version ",(0,s.jsx)(n.strong,{children:"watched keys"}),". The keys that are watched in Garnet use the ",(0,s.jsx)(n.code,{children:"Modified"})," bit in Tsavorite to track modification (more on Modified bit Below)"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["For records in the disk, we increment the version for ",(0,s.jsx)(n.strong,{children:"copy-update"})," RMWs and Upserts. ",(0,s.jsx)(n.strong,{children:"We intentionally accept this overhead because copy updates are less often, and the overhead is not crucial."})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Increment the version in ",(0,s.jsx)(n.code,{children:"MainStoreFunctions"})," and ",(0,s.jsx)(n.code,{children:"ObjectStoreFunctions"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"InPlaceUpdater"})," if it is watched"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ConcurrentWriter"})," if it is watched"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"ConcurrentDeleter"})," if it is watched"]}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PostSingleWriter"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PostInitialUpdater"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PostCopyUpdater"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"PostSingleDeleter"})}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"modified-bit",children:"Modified Bit"}),"\n",(0,s.jsxs)(n.p,{children:['The Modified bit tracks modifications in records in Tsavorite. The modified bit for each record gets set to "1" when they get modified and ',(0,s.jsx)(n.strong,{children:"Remains"}),' "1" until somebody Reset it to zero using the ',(0,s.jsx)(n.code,{children:"ResetModified"})," API."]}),"\n",(0,s.jsx)(n.h4,{id:"watch",children:"Watch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["We add a ",(0,s.jsx)(n.code,{children:"ClientSesssion.ResetModified(ref Key key)"})," API.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["CAS the ",(0,s.jsx)(n.code,{children:"RecordInfo"})," word into the same word, but with the ",(0,s.jsx)(n.strong,{children:"modified bit reset"}),"."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["When somebody watches a key in Garnet, we call ",(0,s.jsx)(n.code,{children:"ResetModified"})," API and store that key in ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["At the time of watch, we read a version of that record from the version map and store it alongside the key in ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["At the time of Transaction Execution, we go through all keys in ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer"})," and if their version is still the same, we proceed with the transactions"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"unwatch",children:"Unwatch"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"When a record gets modified in Tsavorite the modified bit gets set automatically"}),"\n",(0,s.jsxs)(n.li,{children:["When a user calls ",(0,s.jsx)(n.code,{children:"Unwatch"})," API in Garnet we simply just reset the ",(0,s.jsx)(n.code,{children:"WatchedKeyContainer"})]}),"\n",(0,s.jsxs)(n.li,{children:["After every ",(0,s.jsx)(n.code,{children:"DISCARD"}),", ",(0,s.jsx)(n.code,{children:"EXEC"}),", ",(0,s.jsx)(n.code,{children:"UNWATCH"})," command we unwatch everything"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"testing",children:"Testing"}),"\n",(0,s.jsxs)(n.p,{children:["We have written a micro-benchmark ",(0,s.jsx)(n.code,{children:"TxnPerfBench"})," to test client transactions. The benchmark contains four different workloads:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"READ_TXN"}),"\n",(0,s.jsx)(n.li,{children:"WRITE_TXN"}),"\n",(0,s.jsx)(n.li,{children:"READ_WRITE_TXN"}),"\n",(0,s.jsx)(n.li,{children:"WATCH_TXN"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"It looks like the online benchmark, and can have different percentages of different workloads:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"dotnet run -c Release -t 2 -b 1 --dbsize 1024 -x --client SERedis --op-workload WATCH_TXN --op-percent 100\ndotnet run -c Release -t 2 -b 1 --dbsize 1024 -x --client SERedis --op-workload READ_TXN,WRITE_TXN --op-percent 50,50\ndotnet run -c Release -t 2 -b 1 --dbsize 1024 -x --client SERedis --op-workload READ_WRITE_TXN --op-percent 100\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Before running the benchmark, we load data with ",(0,s.jsx)(n.code,{children:"opts.DbSize"})," number of records. It also accepts the number of reads and writes per transaction:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"TxnPerfBench(..., int readPerTxn = 4, int writePerTxn = 4)"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"We only support batch size of one."}),"\n",(0,s.jsx)(n.li,{children:"We only support the SE.Redis client for now."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"read_txn",children:"READ_TXN"}),"\n",(0,s.jsxs)(n.p,{children:["Runs a transaction with ",(0,s.jsx)(n.code,{children:"readPerTxn"})," number of ",(0,s.jsx)(n.code,{children:"GET"})," requests;"]}),"\n",(0,s.jsx)(n.h4,{id:"write_txn",children:"WRITE_TXN"}),"\n",(0,s.jsxs)(n.p,{children:["Runs a transaction with ",(0,s.jsx)(n.code,{children:"writePerTxn"})," number of ",(0,s.jsx)(n.code,{children:"SET"})," requests;"]}),"\n",(0,s.jsx)(n.h4,{id:"read_write_txn",children:"READ_WRITE_TXN"}),"\n",(0,s.jsxs)(n.p,{children:["Runs a mix of ",(0,s.jsx)(n.code,{children:"SET"})," and ",(0,s.jsx)(n.code,{children:"GET"})," request (",(0,s.jsx)(n.code,{children:"readPerTxn"}),", ",(0,s.jsx)(n.code,{children:"writePerTxn"}),")"]}),"\n",(0,s.jsx)(n.h4,{id:"watch_txn",children:"WATCH_TXN"}),"\n",(0,s.jsxs)(n.p,{children:["This workload watches ",(0,s.jsx)(n.code,{children:"readPerTxn"})," number of keys. Then starts a transaction, reads the watched keys, and writes to ",(0,s.jsx)(n.code,{children:"writePerTxn"})," number of keys."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"readPerTxn = 2\nwritePerTxn = 2\n\nWATCH x1\nWATCH x2\nMULTI\nGET x1\nGET x2\nSET x3 v3\nSET x4 v4\nEXEC\n"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>a});var s=i(6540);const t={},r=s.createContext(t);function o(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);