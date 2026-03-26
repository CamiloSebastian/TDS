const axios = require("axios");
const getWeather = require("../services/weatherService");

jest.mock("axios");

test("retorna temperatura corretamente", async () => {
  axios.get.mockResolvedValue({
    data: {
      current_weather: {
        temperature: 28
      }
    }
  });

  const result = await getWeather(-12, -38);

  expect(result.temperature).toBe(28);
});