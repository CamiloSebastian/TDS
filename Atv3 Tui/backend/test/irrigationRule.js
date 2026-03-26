// backend/utils/irrigationRule.js
function getAdvice(temp) {
  if (temp >= 35) {
    return "Irrigação URGENTE";
  } else if (temp >= 25) {
    return "Irrigação moderada";
  } else {
    return "Não irrigar";
  }
}

module.exports = getAdvice;