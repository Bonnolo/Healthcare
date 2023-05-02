-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Versione server:              10.4.25-MariaDB - mariadb.org binary distribution
-- S.O. server:                  Win64
-- HeidiSQL Versione:            12.1.0.6537
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dump della struttura del database healthcare
DROP DATABASE IF EXISTS `healthcare`;
CREATE DATABASE IF NOT EXISTS `healthcare` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `healthcare`;

-- Dump della struttura di tabella healthcare.items_sold
DROP TABLE IF EXISTS `items_sold`;
CREATE TABLE IF NOT EXISTS `items_sold` (
  `product_id` int(13) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL DEFAULT '',
  `sold_date` date NOT NULL,
  `quantity` int(20) NOT NULL,
  `price` decimal(6,2) NOT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- Dump dei dati della tabella healthcare.items_sold: ~3 rows (circa)
INSERT INTO `items_sold` (`product_id`, `name`, `sold_date`, `quantity`, `price`) VALUES
	(0000000000001, 'pippo', '2023-04-12', 4, 13.99),
	(0000000000002, 'baudo', '2023-04-26', 3, 16.99),
	(0000000000003, 'Singulair', '2023-04-26', 5, 60.90);

-- Dump della struttura di tabella healthcare.orders
DROP TABLE IF EXISTS `orders`;
CREATE TABLE IF NOT EXISTS `orders` (
  `product_id` int(13) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `quantity` int(11) NOT NULL,
  `date_of_order` date NOT NULL,
  `price` decimal(6,2) NOT NULL DEFAULT 0.00,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2147483650 DEFAULT CHARSET=utf8mb4;

-- Dump dei dati della tabella healthcare.orders: ~3 rows (circa)
INSERT INTO `orders` (`product_id`, `name`, `quantity`, `date_of_order`, `price`) VALUES
	(0000000000001, 'pippo', 3, '2023-04-12', 13.99),
	(0002147483648, 'Baudo', 2, '2023-04-26', 16.99),
	(0002147483649, 'gamepad', 1, '2023-04-26', 59.60);

-- Dump della struttura di tabella healthcare.stock
DROP TABLE IF EXISTS `stock`;
CREATE TABLE IF NOT EXISTS `stock` (
  `product_id` int(13) unsigned zerofill NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `buy_price` decimal(6,2) NOT NULL,
  `sell_price` decimal(6,2) NOT NULL,
  `stock` int(10) NOT NULL,
  `last_added` date NOT NULL,
  `expiration` date DEFAULT NULL,
  PRIMARY KEY (`product_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- Dump dei dati della tabella healthcare.stock: ~4 rows (circa)
INSERT INTO `stock` (`product_id`, `name`, `buy_price`, `sell_price`, `stock`, `last_added`, `expiration`) VALUES
	(0000000000001, 'pippo', 13.99, 16.99, 2, '2023-03-30', '2023-04-30'),
	(0000000000002, 'baudo', 14.99, 17.99, 6, '2023-04-04', '2023-04-04'),
	(0000000000003, 'pepega', 16.99, 18.99, 4, '2023-04-04', '2023-04-04'),
	(0000000000004, 'marco', 18.99, 20.99, 3, '2023-04-12', '2023-04-12');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
