-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 07, 2022 at 10:33 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db1`
--
CREATE DATABASE IF NOT EXISTS `db1` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `db1`;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL PRIMARY KEY AUTO_INCREMENT UNIQUE,
  `username` varchar(30) NOT NULL UNIQUE,
  `password` varchar(255) NOT NULL,
  `email` varchar(50) NOT NULL UNIQUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `email`) VALUES
(1, 'klacheva', '$2y$10$6An7OkGwsYHpaSRjz/EKO.6phPowmnRFxB0qmkFXWOpA3Q9Nb6cIy', 'klacheva@abc.bg'), 
(2, 'kali', '$2y$10$yvCiGtXRZDa/UkFufHKPOOcbsOM608Y.j8ghRBJu7CqTj9Zr2bo5W', 'kali@abc.bg');

CREATE TABLE friends(
  name varchar(255) NOT NULL,
  age int(2) NOT NULL,
  location varchar(255) NOT NULL,
  email varchar(50) NOT NULL 
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO friends (name, age, location, email) VALUES
('Marina', '25', 'Sofia', 'mimi@abc.bg'),
('Kristina','46','Burgas', 'krisi_goranova@abc.com');


-- --------------------------------------------------------



/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
