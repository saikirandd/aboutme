function LengthConverterT(valNum) {
    valNum = parseFloat(valNum);
    if(valNum>0){
    kilo =    valNum/39370;
    return kilo;
}else {
  return 0;

}
    
}   
 
//QUnit Testing 5 times
  QUnit.test("LengthConverterT", function(assert) {
	assert.equal(LengthConverterT(4), 0.0001016002032004064, "4 inches  == 0.0001016002032004064  kilometers");
	assert.equal(LengthConverterT(10000),0.254000508001016, "10000 inches  == 0.254000508001016 kilometers");
	assert.equal(LengthConverterT(-50), 0, "-50 inches  == 0 kilometers");
	assert.equal(LengthConverterT(748974995), 19024.002921005842, "748974995 inches  == 19024.002921005842 kilometers");
	assert.equal(LengthConverterT(1), 0.0000254000508001016, "1 inches  == 0.0000254000508001016 kilometers");
  });
