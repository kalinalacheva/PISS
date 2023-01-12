<?php

class DB
{
    private $connection;

    function __construct()
    {
        $db = parse_ini_file("config.ini");

        $host = $db["host"];
        $dbname = $db["dbname"];
        $type = $db["type"];
        $dsn = "$type:host=$host;dbname=$dbname";
        $user = $db["user"];
        $password = $db["password"];

        try {
            $this->connection = new PDO($dsn, $user, $password, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8'));
        } catch (PDOException $e) {
            throw new PDOException($e->getMessage());
        }
    }

    function getConnection()
    {
        return $this->connection;
    }
}
