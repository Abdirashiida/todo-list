const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);
const fs = require('fs');
const todoList=[]

module.exports=todo

 function todo(){

    console.log("Eneter 1 for Add");
    console.log("Eneter 2 for Update");
    console.log("Eneter 3 for delete");
    rl.question("choose  ", (action) => {
   
    
      switch (action) {
        case '1':
            addTodolIst( )
          break;
        case '2':
            UpdateTodolIst( )
          break;
        case '3':
            deletTodolIst()
          break;
        default:
            console.log("error")
      }
      
    });
 }
   
    let count=0;
    function addTodolIst() {
       
        count++;
        rl.question(`Enter Task ${count} or  Enter (2) to Update or  Enter (3) to Delete or  Enter (e) to exit: `,(add)=>{
    
            if(add ==="e"){
                
                console.log(todoList)
                rl.close()
            }else if(add ==="2"){
                UpdateTodolIst()
            }else if(add ==="3"){
                deletTodolIst()
            }
            else{
                todoList.push(add)
                fs.writeFile('todolist.txt', `${todoList}`, function (err) {
                    if (err) throw err;
                    addTodolIst()
                  });
                
            }
              
        })
          
            
     
        
         
        
    }
    function UpdateTodolIst( ) {
        console.log(todoList)
        if(todoList.length !=0){
            rl.question("which one did you went To update ?",todo=>{
                todoList.forEach(t=>{
                    if(t===todo){
                        rl.question("Enter newItem ?",newt=>{
                            console.log(`before update ${todoList}`)
                            let index=todoList.indexOf(t)
                            todoList[index]=newt
                            console.log(`after update ${todoList}`)
                            fs.writeFile('todolist.txt', `${todoList}`, function (err) {
                                if (err) throw err;
                                addTodolIst()
                              });
                            
                        })
                    }
                })
                 
            })
        }else{
            console.log("wax aad badashid maba yaalan meshaan 😁😀😁😀😁")
        }
    
       
       
    }
    function deletTodolIst() {
        console.log(todoList)
        if(todoList.length != 0){
            rl.question("which one did you went To delete ?",todo=>{
                todoList.forEach(t=>{
                    if(t===todo){
                    
                        console.log(`before delete ${todoList}`)
                            let index=todoList.indexOf(t)
                            delete  todoList[index]
                           
                            console.log(`after delete ${todoList}`)
                            fs.writeFile('todolist.txt', `${todoList}`, function (err) {
                                if (err) throw err;
                                addTodolIst()
                              });
                    } 
                })
               
            })
        }
    
      
        else{
            console.log("wax aad deleted maba yaalan meshaan 😁😀😁😀😁")
        }
    }
    
 
