var response = {
   status: 200,
   instruction: '4'
}

exports.getInstruction = function(rRequest, rResponse){ 
   console.log(response)
   rResponse.send(response)
};

exports.setInstruction = function(rRequest, rResponse){
    response.instruction = rRequest.query.instruction.toString()

    rResponse.send(response)
 };