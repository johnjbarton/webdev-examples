function testLabeledBreakInWhile() { 
  var i1 = 0; 
  L1: v$__1: while(true) { 
    var v_2_12_2_14 = i1; 
    var v_2_17_2_18 = 5; 
    var v_2_12_2_18 = v_2_12_2_14 < v_2_17_2_18; 
    if(v_2_12_2_18) { 
      undefined_cont: do { 
        var v_3_6_3_8 = i1; 
        ++ v_3_6_3_8; 
        v$__1: while(true) { 
          var v_4_11_4_13 = i1; 
          var v_4_16_4_17 = 5; 
          var v_4_11_4_17 = v_4_11_4_13 < v_4_16_4_17; 
          if(v_4_11_4_17) { 
            undefined_cont: do { 
              var v_5_10_5_12 = i1; 
              var v_5_15_5_16 = 2; 
              if(v_5_10_5_12 > v_5_15_5_16) { 
                break L1; 
              } 
              var v_8_8_8_10 = i1; 
              ++ v_8_8_8_10; 
            } while(false); 
          } else { 
            break; 
          } 
        } 
      } while(false); 
    } else { 
      break; 
    } 
  } 
  return i1; 
} 