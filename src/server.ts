import errorHandler from "errorhandler";
import typeorm, { Connection, createConnection } from "typeorm";

import app from "./app";
import { Movie } from "./Entity/Movie";
import { User } from "./Entity/User";

const typeOrmConnect = async () => {
  try {
    const connection: Connection = await createConnection({
      type: "postgres",
      host: "localhost",
      port: 5432,
      username: "postgres",
      password: "test",
      database: "test",
      entities: [User, Movie],
      synchronize: true,
    });
  } catch (error) {
    console.log(error);
  }
};

typeOrmConnect();

app.listen(app.get("port"), () => {
  console.log(
    "  App is running at http://localhost:%d in %s mode",
    app.get("port"),
    app.get("env")
  );
  console.log("  Press CTRL-C to stop\n");
});

app.use(errorHandler());
