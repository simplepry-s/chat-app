ES6 REST API Boilerplate
==================================

## Start Database MySql

Start docker
```sh
$ cd docker
$ dokcer-compose up -d
```

Login in to mysql
> Altenative way to access mysql using [MySQL Workbench](https://dev.mysql.com/downloads/workbench/)
```sh
$ docker exec -it mysql-db bash
$ mysql -u peter -p db
  password: parker
```

Execute sql script
```sh
$ source sql/user.sql
```


## Start API
```sh
$ yarn install
$ yarn dev

```

## Test
```
GET http://localhost:8080/api/user
```

License
----

MIT



