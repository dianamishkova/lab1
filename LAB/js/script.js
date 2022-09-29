let colorPicker = new iro.ColorPicker('#picker', {
  layout: [
    { 
      component: iro.ui.Wheel,
    },
    { 
      component: iro.ui.Slider,
    },
  ]
});


let colorField = document.getElementById('color');

let numberRed = document.getElementById('number_red');
let rangeRed = document.getElementById('range_red');
let numberGreen = document.getElementById('number_green');
let rangeGreen = document.getElementById('range_green');
let numberBlue = document.getElementById('number_blue');
let rangeBlue = document.getElementById('range_blue');

let numberCyan = document.getElementById('number_cyan');
let rangeCyan = document.getElementById('range_cyan');
let numberMagenta = document.getElementById('number_magenta');
let rangeMagenta = document.getElementById('range_magenta');
let numberYellow = document.getElementById('number_yellow');
let rangeYellow = document.getElementById('range_yellow');
let numberKey = document.getElementById('number_key');
let rangeKey = document.getElementById('range_key');

let numberHue = document.getElementById('number_hue');
let rangeHue = document.getElementById('range_hue');
let numberSaturation = document.getElementById('number_saturation');
let rangeSaturation = document.getElementById('range_saturation');
let numberLightness = document.getElementById('number_lightness');
let rangeLightness = document.getElementById('range_lightness');

let numberX = document.getElementById('number_X');
let rangeX = document.getElementById('range_X');
let numberY = document.getElementById('number_Y');
let rangeY = document.getElementById('range_Y');
let numberZ = document.getElementById('number_Z');
let rangeZ = document.getElementById('range_Z');

let R = 0;
let G = 0;
let B = 0;
let H = 0;
let S = 0;
let L = 0;
let C = 0;
let M = 0;
let Y = 0;
let K = 0;
let X = 0;
let YY = 0;
let Z = 0;

let r = 0;
let g = 0;
let b = 0;
let h = 0;
let s = 0;
let l = 0;
let v = 0;
let k = 0;
let x = 0;
let yy = 0;
let z = 0;


colorPicker.on('color:change', function(color) {
  colorField.style.backgroundColor = color.hexString;

  numberRed.value = color.rgba.r;
  rangeRed.value = color.rgba.r;
  numberGreen.value = color.rgba.g;
  rangeGreen.value = color.rgba.g;
  numberBlue.value = color.rgba.b;
  rangeBlue.value = color.rgba.b;


  R = color.rgba.r;
  G = color.rgba.g;
  B = color.rgba.b;

  h1 = color.hsl.h;
  s1 = color.hsl.s;
  l1 = color.hsl.l;
  RGBtoHSL(R, G, B);
  RGBtoCMYK(R, G, B);
  RGBtoXYZ(R, G, B);

  numberCyan.value = Math.round(C * 100);
  numberMagenta.value = Math.round(M * 100);
  numberYellow.value = Math.round(Y * 100);
  numberKey.value = Math.round(K * 100);
  rangeCyan.value = Math.round(C * 100);
  rangeMagenta.value = Math.round(M * 100);
  rangeYellow.value = Math.round(Y * 100);
  rangeKey.value = Math.round(K * 100);



  numberHue.value = Math.round(H);
  numberSaturation.value = Math.round(S * 100);
  numberLightness.value = Math.round(L * 100);
  rangeHue.value = Math.round(H);
  rangeSaturation.value = Math.round(S * 100);
  rangeLightness.value = Math.round(L * 100);



  numberX.value = Math.round(X);
  numberY.value = Math.round(YY);
  numberZ.value = Math.round(Z);
  rangeX.value = Math.round(X);
  rangeY.value = Math.round(YY);
  rangeZ.value = Math.round(Z);
});

function changeTheValue(range, number){
  range.value = number.value;

  switch (number){
      case numberRed:
          numberRed.oninput = function(){
              r = +number.value;
              g = +numberGreen.value;
              b = +numberBlue.value;
              colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberGreen:
          numberGreen.oninput = function(){
              r = +numberRed.value;
              g = +number.value;
              b = +numberBlue.value;
              colorField.style.background = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberBlue:
          numberBlue.oninput = function(){
              r = +numberRed.value;
              g = +numberGreen.value;
              b = +number.value;
              colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberCyan:
          numberCyan.oninput = function(){
              c = +number.value;
              m = +numberMagenta.value;
              y = +numberYellow.value;
              k = +numberKey.value;
              CMYKtoRGB(c, m, y, k);
  
              colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberMagenta:
          numberMagenta.oninput = function(){
              c = +numberCyan.value;
              m = +number.value;
              y = +numberYellow.value;
              k = +numberKey.value;
              CMYKtoRGB(c, m, y, k);
  
              colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberYellow:
          numberYellow.oninput = function(){
              c = +numberCyan.value;
              m = +numberMagenta.value;
              y = +number.value;
              k = +numberKey.value;
              CMYKtoRGB(c, m, y, k);
  
              colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberKey:
          numberKey.oninput = function(){
              c = +numberCyan.value;
              m = +numberMagenta.value;
              y = +numberYellow.value;
              k = +number.value;
              CMYKtoRGB(c, m, y, k);
    
              colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
              colorPicker.color.rgb = {r, g, b};
            }
            break;
      case numberHue:
          numberHue.oninput = function(){
              h = +number.value;
              s = +numberSaturation.value;
              l = +numberLightness.value;
  
              colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
              colorPicker.color.hsl = {h, s, l};
          }
          break;
      case numberSaturation:
          numberSaturation.oninput = function(){
              h = +numberHue.value;
              s = +number.value;
              l = +numberLightness.value;
  
              colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
              colorPicker.color.hsl = {h, s, l};
          }
          break;
      case numberLightness:
          numberLightness.oninput = function(){
              h = +numberHue.value;
              s = +numberSaturation.value;
              l = +number.value;
      
              colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
              colorPicker.color.hsl = {h, s, l};
          }
          break;
      case numberX:
          numberX.oninput = function(){
              x = +number.value;
              yy = +numberY.value;
              z = +numberZ.value;
              
              XYZtoRGB(x, yy, z);

              colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberY:
          numberY.oninput = function(){
              x = +numberX.value;
              yy = +number.value;
              z = +numberZ.value;
                
              XYZtoRGB(x, yy, z);
  
              colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      case numberZ:
          numberZ.oninput = function(){
              x = +numberX.value;
              yy = +numberY.value;
              z = +number.value;
                
              XYZtoRGB(x, yy, z);
  
              colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
              colorPicker.color.rgb = {r, g, b};
          }
          break;
      }
}

function changeTheValue1(range, number){
  number.value = range.value;

  switch (range){
  case rangeRed:
      rangeRed.oninput = function(){
          r = +range.value;
          g = +rangeGreen.value;
          b = +rangeBlue.value;
          colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeGreen:
      rangeGreen.oninput = function(){
          r = +rangeRed.value;
          g = +range.value;
          b = +rangeBlue.value;
          colorField.style.background = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeBlue:
      rangeBlue.oninput = function(){
          r = +rangeRed.value;
          g = +rangeGreen.value;
          b = +range.value;
          colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeCyan:
      rangeCyan.oninput = function(){
          c = +range.value;
          m = +rangeMagenta.value;
          y = +rangeYellow.value;
          k = +rangeKey.value;
          CMYKtoRGB(c, m, y, k);

          colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
          colorPicker.color.rgb = {r, g, b};

      }
      break;
  case rangeMagenta:
      rangeMagenta.oninput = function(){
          c = +rangeCyan.value;
          m = +range.value;
          y = +rangeYellow.value;
          k = +rangeKey.value;
          CMYKtoRGB(c, m, y, k);

          colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
          colorPicker.color.rgb = {r, g, b};

      }
      break;
  case rangeYellow:
      rangeYellow.oninput = function(){
          c = +rangeCyan.value;
          m = +rangeMagenta.value;
          y = +range.value;
          k = +rangeKey.value;
          CMYKtoRGB(c, m, y, k);

          colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeKey:
      rangeKey.oninput = function(){
          c = +rangeCyan.value;
          m = +rangeMagenta.value;
          y = +rangeYellow.value;
          k = +range.value;
          CMYKtoRGB(c, m, y, k);
  
          colorField.style.backgroundColor = `cmyk(${c}, ${m}, ${y}, ${k})`;
          colorPicker.color.rgb = {r, g, b};
  
      }
      break;
  case rangeHue:
      rangeHue.oninput = function(){
          h = +range.value;
          s = +rangeSaturation.value;
          l = +rangeLightness.value;

          colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
          colorPicker.color.hsl = {h, s, l};
      }
      break;
  case rangeSaturation:
      rangeSaturation.oninput = function(){
          h = +rangeHue.value;
          s = +range.value;
          l = +rangeLightness.value;

          colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
          colorPicker.color.hsl = {h, s, l};
      }
      break;
  case rangeLightness:
      rangeLightness.oninput = function(){
          h = +rangeHue.value;
          s = +rangeSaturation.value;
          l = +range.value;
  
          colorField.style.backgroundColor = `hsl(${h}, ${s}, ${l})`;
          colorPicker.color.hsl = {h, s, l};
      }
      break;
  case rangeX:
      rangeX.oninput = function(){
          x = +range.value;
          yy = +rangeY.value;
          z = +rangeZ.value;
            
          XYZtoRGB(x, yy, z);

          colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeY:
      rangeY.oninput = function(){
          x = +rangeX.value;
          yy = +range.value;
          z = +rangeZ.value;
              
          XYZtoRGB(x, yy, z);

          colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  case rangeZ:
      rangeZ.oninput = function(){
          x = +rangeX.value;
          yy = +rangeY.value;
          z = +range.value;
              
          XYZtoRGB(x, yy, z);

          colorField.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
          colorPicker.color.rgb = {r, g, b};
      }
      break;
  }


}

function RGBtoHSL (R, G, B){
  let R1 = R / 255;
  let G1 = G / 255;
  let B1 = B / 255;
  Cmax = Math.max(R1, G1, B1);
  Cmin = Math.min(R1, G1, B1);
  let delta = Cmax - Cmin;
  if (delta == 0){
      H = 0;
  }
  else if (Cmax == R1 && G1 >= B1){
      H = 60 * (((G1 - B1) / delta)) + 0;
  }
  else if (Cmax == R1 && G1 < B1){
      H = 60 * (((G1 - B1) / delta)) + 360;
  }
  else if (Cmax == G1){
      H = 60 * (((B1 - R1) / delta)) + 120;
  }
  else if (Cmax == B1){
      H = 60 * (((R1 - G1) / delta)) + 240;
  }

  L = (Cmax + Cmin) / 2;

  if (delta == 0){
      S = 0;
  }
  else if (delta != 0){
      S = delta / (1 - Math.abs(2 * L - 1));
  }
  h = H;
  s = S;
  l = L;
  return null;
}

function RGBtoCMYK (R, G, B){
  let C1 = (255 - R) / 255;
  let M1 = (255 - G) / 255;
  let Y1 = (255 - B) / 255;

  K = Math.min(C1, M1, Y1);
  C = (C1 - K)/(1 - K);
  M = (M1 - K)/(1 - K);
  Y = (Y1 - K)/(1 - K);
  if (K == 1){
    C = 0;
    M = 0;
    Y = 0;
  }
  return null;
}

function CMYKtoRGB (C, M, Y, K){
  r = 255 * ( 1 - C / 100 ) * ( 1 - K / 100 )
  g = 255 * ( 1 - M / 100 ) * ( 1 - K / 100 )
  b = 255 * ( 1 - Y / 100 ) * ( 1 - K / 100 )
  return null;
}

function XYZtoRGB (X, Y, Z){

  let var_X = X / 100;
  let var_Y = Y / 100;
  let var_Z = Z / 100;

  let var_R = var_X *  3.2406 + var_Y * -1.5372 + var_Z * -0.4986;
  let var_G = var_X * -0.9689 + var_Y *  1.8758 + var_Z *  0.0415;
  let var_B = var_X *  0.0557 + var_Y * -0.2040 + var_Z *  1.0570;

  if ( var_R > 0.0031308 ) var_R = 1.055 * ( var_R ^ ( 1 / 2.4 ) ) - 0.055;
  else                     var_R = 12.92 * var_R;
  if ( var_G > 0.0031308 ) var_G = 1.055 * ( var_G ^ ( 1 / 2.4 ) ) - 0.055;
  else                     var_G = 12.92 * var_G;
  if ( var_B > 0.0031308 ) var_B = 1.055 * ( var_B ^ ( 1 / 2.4 ) ) - 0.055;
  else                     var_B = 12.92 * var_B;

  r = var_R * 255;
  g = var_G * 255;
  b = var_B * 255;
  return null;
}

function RGBtoXYZ (R, G, B){

  let var_R = ( R / 255 );
  let var_G = ( G / 255 );
  let var_B = ( B / 255 );

  if ( var_R > 0.04045 ) var_R = Math.pow(( ( var_R + 0.055 ) / 1.055 ), 2.4);
  else                   var_R = var_R / 12.92;
  if ( var_G > 0.04045 ) var_G = Math.pow(( ( var_G + 0.055 ) / 1.055 ), 2.4);
  else                   var_G = var_G / 12.92;
  if ( var_B > 0.04045 ) var_B = Math.pow(( ( var_B + 0.055 ) / 1.055 ), 2.4);
  else                   var_B = var_B / 12.92;

  var_R = var_R * 100;
  var_G = var_G * 100;
  var_B = var_B * 100;

  X = var_R * 0.4124 + var_G * 0.3576 + var_B * 0.1805;
  YY = var_R * 0.2126 + var_G * 0.7152 + var_B * 0.0722;
  Z = var_R * 0.0193 + var_G * 0.1192 + var_B * 0.9505;
  return null;
}

