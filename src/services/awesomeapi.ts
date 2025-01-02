let baseUrl = "https://economia.awesomeapi.com.br/json";

export const getUSD = async () => {
  try {
    let url = baseUrl + "/last/USD-BRL";
    const req = await fetch(url);
    const json = await req.json();

    if (json.USDBRL) {
      return parseFloat(json.USDBRL.ask);
    }
  } catch (error) {
    return 0;
  }
  return 0;
};

export const getEUR = async () => {
  try {
    let url = baseUrl + "/last/EUR-BRL";
    const req = await fetch(url);
    const json = await req.json();

    if (json.EURBRL) {
      return parseFloat(json.EURBRL.ask);
    }
  } catch (error) {
    return 0;
  }
  return 0;
};

export const getBTC = async () => {
  try {
    let url = baseUrl + "/last/BTC-BRL";
    const req = await fetch(url);
    const json = await req.json();

    if (json.BTCBRL) {
      return parseFloat(json.BTCBRL.ask);
    }
  } catch (error) {
    return 0;
  }
  return 0;
};
