export default {
    "db-config": {
        "sd_fMF4aYEnvGUCOt7r": {
            "id": "sd_fMF4aYEnvGUCOt7r",
            "type": "db-config",
            "viewType": "server",
            "nodeType": "flow",
            "dbOption": {
                "name": "postgres_0",
                "type": "postgres",
                "host": process.env.DATABASE_HOST,
                "port": process.env.DATABASE_PORT,
                "username": process.env.DATABASE_USERNAME,
                "password": process.env.DATABASE_PASSWORD,
                "database": process.env.DATABASE_NAME,
                "schema": process.env.DATABASE_SCHEMA,
                "uuidExtension": "",
                "synchronize": false
            },
            "disabledb": false,
            "selectedDB": "postgres",
            "selectedOption": "postgres",
            "dbCategory": "sql",
            "mssql_name": "mssql_0",
            "mssql_type": "mssql",
            "mssql_host": "localhost",
            "mssql_port": 1433,
            "mssql_username": "username",
            "mssql_password": "password",
            "mssql_database": "database",
            "mssql_connectionTimeout": 15000,
            "mssql_requestTimeout": 15000,
            "mssql_synchronize": false,
            "mssql_options.instanceName": "",
            "mssql_pool.max": 10,
            "mssql_pool.min": 1,
            "mssql_pool.idleTimeoutMillis": 30000,
            "mssql_options.cancelTimeout": 5000,
            "mssql_options.packetSize": 4096,
            "mssql_options.useUTC": true,
            "mssql_options.localAddress": "",
            "mssql_options.readOnlyIntent": false,
            "mssql_options.encrypt": true,
            "mssql_options.trustServerCertificate": true,
            "oracle_name": "oracle_0",
            "oracle_type": "oracle",
            "oracle_connectString": "oracle",
            "oracle_host": "localhost",
            "oracle_port": 1521,
            "oracle_username": "username",
            "oracle_password": "password",
            "oracle_serviceName": "orcl",
            "oracle_connectionTimeout": 15000,
            "oracle_requestTimeout": 15000,
            "oracle_synchronize": false,
            "mongodb_name": "mongodb_0",
            "mongodb_type": "mongodb",
            "mongodb_url": "mongodb://localhost:27017",
            "mongodb_options": "",
            "mysql_name": "mysql_0",
            "mysql_type": "mysql",
            "mysql_host": "localhost",
            "mysql_port": 3306,
            "mysql_username": "username",
            "mysql_password": "password",
            "mysql_database": "database",
            "mysql_synchronize": false,
            "mysql_extra.connectionLimit": 10,
            "mysql_charset": "UTF8_GENERAL_CI",
            "mysql_timezone": "local",
            "mysql_connectTimout": 10000,
            "mysql_acquireTimeout": 10000,
            "mysql_insecureAuth": false,
            "mysql_supportBigNumbers": true,
            "mysql_bigNumberStrings": false,
            "mysql_dateStrings": false,
            "mysql_debug": false,
            "mysql_trace": true,
            "mysql_multipleStatements": false,
            "mysql_flags": "flags",
            "mariadb_name": "mariadb_0",
            "mariadb_type": "mariadb",
            "mariadb_host": "localhost",
            "mariadb_port": 3306,
            "mariadb_username": "username",
            "mariadb_synchronize": false,
            "mariadb_password": "password",
            "mariadb_database": "database",
            "mariadb_charset": "UTF8_GENERAL_CI",
            "mariadb_timezone": "local",
            "mariadb_extra.connectionLimit": 10,
            "mariadb_connectTimout": 10000,
            "mariadb_acquireTimeout": 10000,
            "mariadb_insecureAuth": false,
            "mariadb_supportBigNumbers": true,
            "mariadb_bigNumberStrings": false,
            "mariadb_dateStrings": false,
            "mariadb_debug": false,
            "mariadb_trace": true,
            "mariadb_multipleStatements": false,
            "mariadb_flags": "flags",
            "postgres_name": "postgres_0",
            "postgres_type": "postgres",
            "postgres_host": process.env.DATABASE_HOST,
            "postgres_port": process.env.DATABASE_PORT,
            "postgres_username": process.env.DATABASE_USERNAME,
            "postgres_password": process.env.DATABASE_PASSWORD,
            "postgres_database": process.env.DATABASE_NAME,
            "postgres_schema": process.env.DATABASE_SCHEMA,
            "postgres_uuidExtension": "",
            "postgres_synchronize": false,
            "category": "config",
            "__ssdTypeInputs__": {
                "mssql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mssql_port": {
                    "type": "num",
                    "value": 1433
                },
                "mssql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mssql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mssql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mssql_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "mssql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.instanceName": {
                    "type": "str",
                    "value": ""
                },
                "mssql_pool.max": {
                    "type": "num",
                    "value": 10
                },
                "mssql_pool.min": {
                    "type": "num",
                    "value": 1
                },
                "mssql_pool.idleTimeoutMillis": {
                    "type": "num",
                    "value": 30000
                },
                "mssql_options.cancelTimeout": {
                    "type": "num",
                    "value": 5000
                },
                "mssql_options.packetSize": {
                    "type": "num",
                    "value": 4096
                },
                "mssql_options.useUTC": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.localAddress": {
                    "type": "str",
                    "value": ""
                },
                "mssql_options.readOnlyIntent": {
                    "type": "bool",
                    "value": false
                },
                "mssql_options.encrypt": {
                    "type": "bool",
                    "value": true
                },
                "mssql_options.trustServerCertificate": {
                    "type": "bool",
                    "value": true
                },
                "oracle_connectString": {
                    "type": "str",
                    "value": "oracle"
                },
                "oracle_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "oracle_port": {
                    "type": "num",
                    "value": 1521
                },
                "oracle_username": {
                    "type": "str",
                    "value": "username"
                },
                "oracle_password": {
                    "type": "str",
                    "value": "password"
                },
                "oracle_serviceName": {
                    "type": "str",
                    "value": "orcl"
                },
                "oracle_connectionTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_requestTimeout": {
                    "type": "num",
                    "value": 15000
                },
                "oracle_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mongodb_url": {
                    "type": "str",
                    "value": "mongodb://localhost:27017"
                },
                "mongodb_options": {
                    "type": "str",
                    "value": ""
                },
                "mysql_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mysql_port": {
                    "type": "num",
                    "value": 3306
                },
                "mysql_username": {
                    "type": "str",
                    "value": "username"
                },
                "mysql_password": {
                    "type": "str",
                    "value": "password"
                },
                "mysql_database": {
                    "type": "str",
                    "value": "database"
                },
                "mysql_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mysql_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mysql_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mysql_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mysql_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mysql_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mysql_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mysql_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mysql_debug": {
                    "type": "bool",
                    "value": false
                },
                "mysql_trace": {
                    "type": "bool",
                    "value": true
                },
                "mysql_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mysql_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "mariadb_host": {
                    "type": "str",
                    "value": "localhost"
                },
                "mariadb_port": {
                    "type": "num",
                    "value": 3306
                },
                "mariadb_username": {
                    "type": "str",
                    "value": "username"
                },
                "mariadb_synchronize": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_password": {
                    "type": "str",
                    "value": "password"
                },
                "mariadb_database": {
                    "type": "str",
                    "value": "database"
                },
                "mariadb_charset": {
                    "type": "str",
                    "value": "UTF8_GENERAL_CI"
                },
                "mariadb_timezone": {
                    "type": "str",
                    "value": "local"
                },
                "mariadb_extra.connectionLimit": {
                    "type": "num",
                    "value": 10
                },
                "mariadb_connectTimout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_acquireTimeout": {
                    "type": "num",
                    "value": 10000
                },
                "mariadb_insecureAuth": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_supportBigNumbers": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_bigNumberStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_dateStrings": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_debug": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_trace": {
                    "type": "bool",
                    "value": true
                },
                "mariadb_multipleStatements": {
                    "type": "bool",
                    "value": false
                },
                "mariadb_flags": {
                    "type": "str",
                    "value": "flags"
                },
                "postgres_host": {
                    "type": "server_env",
                    "value": "DATABASE_HOST"
                },
                "postgres_port": {
                    "type": "server_env",
                    "value": "DATABASE_PORT"
                },
                "postgres_username": {
                    "type": "server_env",
                    "value": "DATABASE_USERNAME"
                },
                "postgres_password": {
                    "type": "server_env",
                    "value": "DATABASE_PASSWORD"
                },
                "postgres_database": {
                    "type": "server_env",
                    "value": "DATABASE_NAME"
                },
                "postgres_schema": {
                    "type": "server_env",
                    "value": "DATABASE_SCHEMA"
                },
                "postgres_uuidExtension": {
                    "type": "str",
                    "value": ""
                },
                "postgres_synchronize": {
                    "type": "bool",
                    "value": false
                }
            },
            "__n_excludedFromValidation__": {}
        }
    }
}