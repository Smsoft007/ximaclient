const commonLib = {
  nullCheck() {
    var keys = Object.keys(arguments[0]);
    for (var key in keys) {
      if (arguments[0][keys[key]] === 0) {
        arguments[0][keys[key]] = "0";
      }
      if (
        arguments[0][keys[key]] === null ||
        arguments[0][keys[key]] === "" ||
        arguments[0][keys[key]] === undefined
      ) {
        console.log(keys[key] + " is null");
        return true;
      }
    }
    return false;
  },
  bindValue: (obj) => {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      try {
        if ($("#" + keys[i])[0] != undefined) {
          var tagName = $("#" + keys[i]).prop("tagName");
          if (tagName == "SPAN") {
            $("#" + keys[i]).html(obj[keys[i]]);
          } else if (tagName == "INPUT") {
            $("#" + keys[i]).val(obj[keys[i]]);
          } else {
            $("#" + keys[i]).text(obj[keys[i]]);
          }
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  getRandomIntInclusive: (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //최댓값도 포함, 최솟값도 포함
  },
  bindValueByName: (Name, obj) => {
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      try {
        if ($(Name + "[name=" + keys[i] + "]") != undefined) {
          $(Name + "[name=" + keys[i] + "]").html(obj[keys[i]]);
        }
      } catch (e) {
        console.log(e);
      }
    }
  },
  comma: (x) => {
    if (Number.isInteger(x)) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      return 0;
    }
  },
};
