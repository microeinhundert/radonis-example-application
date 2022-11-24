import { initClient } from "@microeinhundert/radonis";
import { queryPlugin } from "@microeinhundert/radonis-query";

initClient({
  plugins: [
    queryPlugin({
      defaultOptions: { queries: { suspense: true } },
      baseUrl: "http://127.0.0.1:3333",
    }),
  ],
});
