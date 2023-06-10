function getElement(selector) {
  return document.querySelector(selector)
}
// Thêm số
var mangNumber = new mangSo()
getElement('#btnThemSo').onclick = function () {
  var inputNumber = +getElement('#nhapSo').value;
  mangNumber.addNumber(inputNumber)
  getElement('#result').innerHTML = mangNumber.arrNumber;
}

function mangSo() {
  this.arrNumber = []

  this.addNumber = function (inputNumber) {
    this.arrNumber.push(inputNumber)
  }


}
// Tính tổng
getElement('#btnTinhTong').onclick = function () {
  var sum = 0;
  var arr = mangNumber.arrNumber
  for (var i = 0; i < arr.length; i++) {
    var value = arr[i];
    sum += value
  }
  getElement('#result1').innerHTML = sum;
};

// Đếm số
getElement('#btnDemSo').onclick = function () {
  var count = 0;
  var arr = mangNumber.arrNumber
  for (var j = 0; j < arr.length; j++) {
    if (arr[j] > 0) {
      count++;
    }
    
  }

  getElement('#result2').innerHTML = count;
};

// Tìm số nhỏ nhất
getElement('#btnTimSoNN').onclick = function () {
  var arr = mangNumber.arrNumber
  var min = arr[0];
  for (var k = 1; k < arr.length; k++) {
    if (arr[k] < min) {
      min = arr[k];
    }
  }
  getElement('#result3').innerHTML = min;
};

// Tìm số dương nhỏ nhất
getElement('#btnTimSoDuongNN').onclick = function () {
  var arr = mangNumber.arrNumber;
  var minPos = Infinity;
  for (var l = 0; l < arr.length; l++) {
    if (arr[l] > 0 && arr[l] < minPos) {
      minPos = arr[l];
    }
  };

  getElement('#result4').innerHTML = minPos;
};

// Tìm số chẵn cuối cùng
getElement('#btnTimSoChanCC').onclick = function () {
  var arr = mangNumber.arrNumber;
  var lastNum = -1;
  for (var m = 0; m < arr.length; m++) {
    if (arr[m] % 2 === 0) {
      lastNum = arr[m];
    }
  }
  getElement('#result5').innerHTML = lastNum;
};

// Đổi chỗ
getElement('#btnDoiCho').onclick = function () {
  var arr = mangNumber.arrNumber;
  var index1 = +getElement('#number1').value;
  var index2 = +getElement('#number2').value;
  var temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
  getElement('#result6').innerHTML = arr;
}

// Sắp xếp tăng dần
getElement('#btnSapXep').onclick = function () {
  var arr = mangNumber.arrNumber;
  for (var t = 0; t < arr.length; t++) {
    for (var y = t + 1; y < arr.length; y++) {
      if (arr[t] > arr[y]) {
        var tmp = arr[t]
        arr[t] = arr[y]
        arr[y] = tmp
      }
    }
  }
  getElement('#result7').innerHTML = arr;
}

// Tìm số nguyên tố đầu tiên
function isPrime(num) {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num !== 1;
}

getElement('#btnTimSNT').onclick = function () {
  var arr = mangNumber.arrNumber;
  for (var u = 0; u < arr.length; u++) {
    if (isPrime(arr[u])) {
      getElement('#result8').innerHTML = arr[u];
      break;
    } getElement('#result8').innerHTML = 'Không có số nguyên tố';
  }
}

// Đếm số nguyên
getElement('#btnThemSo2').onclick = function () {
  var inputNumber = +getElement('#nhapSo2').value;
  mangNumber.addNumber(inputNumber)
  getElement('#result9').innerHTML = mangNumber.arrNumber;
}

getElement('#btnDemSN').onclick = function (){
  var arr = mangNumber.arrNumber;
  var count = 0;
  for(var o = 0; o < arr.length; o++){
    if(Number.isInteger(arr[o])) {
      count++;
    }
  }
  getElement('#result10').innerHTML = count;
}

// So sánh số lượng số âm và số dương
getElement('#btnSoSanh').onclick = function (){
  var arr = mangNumber.arrNumber;
  var demSoDuong = 0;
  var demSoAm = 0;
  for (var p = 0; p < arr.length; p++){
    if (arr[p] > 0) {
      demSoDuong++;
    } else if (arr[p] < 0) {
      demSoAm++;
    }
  }
  if (demSoDuong > demSoAm) {
    getElement('#result11').innerHTML = 'Có nhiều số dương hơn số âm';
  } else if (demSoAm > demSoDuong){
    getElement('#result11').innerHTML = 'Có nhiều số âm hơn số dương';
  } else{
    getElement('#result11').innerHTML = 'Số lượng số dương và số âm bằng nhau';
  }
}



