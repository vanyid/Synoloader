

utils.include( utils.baseURL + "../src/modules/Protocol.js"); 


function setUp() {
  
}

function tearDown() {
   utils.tearDownHttpServer(4445);
}

function startUp()
{
 
}

function shutDown()
{
}

test_Protocol_add_url_succsed_42.description = 'test_Protocol_add_url_succsed_42';
test_Protocol_add_url_succsed_42.priority    = 'must';
function test_Protocol_add_url_succsed_42() {
 mytest= Protocol('http://192.168.0.201:5050',5000,'synoloader_tester', '1234');

 connect_response={};
 var setdone = function(response){connect_response=response; };

 mytest.conect(setdone);

 utils.wait(4000);
 assert.equals(true,connect_response.success);

 addurl_response={};
 var setdone_addurl = function(response){addurl_response=response; };
 mytest.task_action(setdone_addurl,'addurl','http://www.ubuntu.com/start-download?distro=desktop&bits=64&release=latest'); 

 utils.wait(4000);
 assert.equals(true, addurl_response.success);

 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(4000);
 assert.equals(true,get_all_response.success);
 assert.equals("start-download?distro=desktop&bits=64&release=latest",get_all_response.items[0].filename);
 assert.equals(1,get_all_response.items[0].status);


 stop_response={};
 var setdone_stop = function(response){stop_response=response; };
 mytest.task_action(setdone_stop,'stop',get_all_response.items[0].id); 

 utils.wait(4000);
 assert.equals(true,stop_response.success);


 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(4000);
 assert.equals(true,get_all_response.success);
 assert.equals(3,get_all_response.items[0].status);


 resume_response={};
 var setdone_resume = function(response){resume_response=response; };
 mytest.task_action(setdone_resume,'resume',get_all_response.items[0].id); 

 utils.wait(4000);
 assert.equals(true,resume_response.success);


 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(4000);
 assert.equals(true,get_all_response.success);
 assert.equals(1,get_all_response.items[0].status);

 delete_response={};
 var setdone_delete = function(response){delete_response=response; };
 mytest.task_action(setdone_delete,'delete',get_all_response.items[0].id); 

 utils.wait(4000);
 assert.equals(true,delete_response.success);

 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(4000);
 assert.equals(true,get_all_response.success);
 assert.equals([],get_all_response.items);
}



test_Protocol_add_url_succsed_43.description = 'test_Protocol_add_url_succsed_43';
test_Protocol_add_url_succsed_43.priority    = 'must';
function test_Protocol_add_url_succsed_43() {
 mytest= Protocol('http://192.168.0.200:5000',5000,'synoloader_tester', '1234');

 connect_response={};
 var setdone = function(response){connect_response=response; };

 mytest.conect(setdone);

 utils.wait(2000);
 assert.equals(true,connect_response.success);

 addurl_response={};
 var setdone_addurl = function(response){addurl_response=response; };
 mytest.task_action(setdone_addurl,'addurl','http://www.ubuntu.com/start-download?distro=desktop&bits=64&release=latest'); 

 utils.wait(2000);
 assert.equals(true, addurl_response.success);

 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(2000);
 assert.equals(true,get_all_response.success);
 assert.equals("start-download?distro=desktop&bits=64&release=latest",get_all_response.items[0].filename);
 assert.equals(1,get_all_response.items[0].status);


 stop_response={};
 var setdone_stop = function(response){stop_response=response; };
 mytest.task_action(setdone_stop,'stop',get_all_response.items[0].id); 

 utils.wait(2000);
 assert.equals(true,stop_response.success);


 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(2000);
 assert.equals(true,get_all_response.success);
 assert.equals(3,get_all_response.items[0].status);


 resume_response={};
 var setdone_resume = function(response){resume_response=response; };
 mytest.task_action(setdone_resume,'resume',get_all_response.items[0].id); 

 utils.wait(2000);
 assert.equals(true,resume_response.success);


 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(2000);
 assert.equals(true,get_all_response.success);
 assert.equals(1,get_all_response.items[0].status);

 delete_response={};
 var setdone_delete = function(response){delete_response=response; };
 mytest.task_action(setdone_delete,'delete',get_all_response.items[0].id); 

 utils.wait(2000);
 assert.equals(true,delete_response.success);

 get_all_response={};
 var setdone_get_all_items = function(response){get_all_response=response; };
 mytest.task_action(setdone_get_all_items,'getall'); 

 utils.wait(2000);
 assert.equals(true,get_all_response.success);
 assert.equals([],get_all_response.items);
}


test_Protocol_add_url_succsed_42_ed2k.description = 'test_Protocol_add_url_succsed_42_ed2k';
test_Protocol_add_url_succsed_42_ed2k.priority    = 'must';
function test_Protocol_add_url_succsed_42_ed2k() {
 mytest= Protocol('http://192.168.0.201:5050',5000,'synoloader_tester', '1234');

 connect_response={};
 var setdone = function(response){connect_response=response; };

 mytest.conect(setdone);

 utils.wait(4000);
 assert.equals(true,connect_response.success);

 addurl_response={};
 var setdone_addurl = function(response){addurl_response=response; };
 mytest.task_action(setdone_addurl,'addurl','ed2k://|file|The.Starving.Games.2013.HDRiP.XViD-AQOS.[sharethefiles.com].avi|751763456|52B8CB118CCBCC43853B723BAB19941F|h=3L65LGE74EFIR4QKTBBVM6O3QKUE6LFG|/'); 

 utils.wait(4000);
 assert.equals(true, addurl_response.success);

}


