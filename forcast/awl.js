class MyWorkletProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
    }

    process(inputs, outputs, parameters) {

    let inputSamples  = inputs[0][0];
  
      this.port.postMessage(inputSamples);

return true;

    }
    
}
registerProcessor('processor', MyWorkletProcessor);