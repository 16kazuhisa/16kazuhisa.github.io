class MyWorkletProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    process(inputs, outputs, parameters) {

  //let inputSamples  = inputs[0][0];
  

return true;

    }
}
registerProcessor('processor', MyWorkletProcessor);