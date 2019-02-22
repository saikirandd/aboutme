function lengthConverterTest(valNum) {
    valNum = parseFloat(valNum);
    if(valNum>0){
    kilo =    valNum/39370;
    return kilo;
}else {
  return "enter numbers greater than 0";

}
    
}   
  
//QUnit Testing 5 times
  QUnit.test("LengthConverter", function(assert) {
	assert.equal(LengthConverter(4, 0.0001016002032004064, "4 inches  == 0.0001016002032004064  kilometers");
	assert.equal(LengthConverter(10000,0.254000508001016, "10000 inches  == 0.254000508001016 kilometers");
	assert.equal(LengthConverter(-50, 0, "-50 inches  == 0 kilometers");
	assert.equal(LengthConverter(748974995, 19024.002921005842, "748974995 inches  == 19024.002921005842 kilometers");
	assert.equal(LengthConverter(1, 0.0000254000508001016, "1 inches  == 0.0000254000508001016 kilometers");
  });
