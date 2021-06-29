-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 29, 2021 at 03:52 AM
-- Server version: 10.4.19-MariaDB
-- PHP Version: 8.0.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `proyectoprogramacion`
--

-- --------------------------------------------------------

--
-- Table structure for table `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `producto_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `comentario` text DEFAULT NULL,
  `fecha_comentario` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comentarios`
--

INSERT INTO `comentarios` (`id`, `producto_id`, `user_id`, `comentario`, `fecha_comentario`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 'Excelente procesador', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, 2, 2, 'Excelente GPU', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(3, 3, 3, 'Excelente Procesador AMD', '2020-02-03', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(4, 4, 4, 'Excelente Placa Madre', '2020-01-04', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(5, 5, 5, 'Excelente gabinete', '2020-01-05', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(6, 6, 1, 'Excelente Cooler', '2020-01-06', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(7, 7, 2, 'Excelente cooler de cm', '2020-01-07', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(8, 8, 3, 'Grandioso teclado', '2020-01-08', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(9, 9, 4, 'bonito monitor', '2020-01-09', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(10, 10, 5, 'Lujosos auriculares', '2020-01-10', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(11, 9, 1, 'gran monitor', '2020-01-09', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(12, 10, 5, 'lindos auriculares', '2020-01-12', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(13, 9, 3, 'genial monitor', '2020-01-09', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(14, 10, 2, 'impecables auriculares', '2020-01-10', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(15, 9, 3, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(16, 10, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(17, 8, 3, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(18, 7, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(19, 8, 3, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(20, 7, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(21, 8, 3, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(22, 7, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(23, 6, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(24, 5, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(25, 6, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(26, 5, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(27, 6, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(28, 5, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(29, 4, 4, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(30, 3, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(31, 4, 4, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(32, 3, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(33, 4, 4, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(34, 3, 1, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(35, 2, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(36, 1, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(37, 2, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(38, 1, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(39, 2, 2, 'Impecable funcionamiento', '2020-02-01', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(40, 1, 5, 'indiscutibles', '2020-01-02', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(41, 4, 6, 'Muy buena placa!', NULL, '2021-06-29 00:48:59', '2021-06-29 00:48:59'),

-- --------------------------------------------------------

--
-- Table structure for table `producto`
--

CREATE TABLE `producto` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) DEFAULT NULL,
  `usuario_id` int(11) NOT NULL,
  `fecha_creacion` date DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `producto`
--

INSERT INTO `producto` (`id`, `nombre`, `descripcion`, `imagen`, `usuario_id`, `fecha_creacion`, `created_at`, `updated_at`) VALUES
(1, 'Intel i7 10700k', 'Grandioso procesador de 8 nucleos y 16 hilos virtuales', 'Comeros-500_.JPG', 1, '2021-04-26', '0000-00-00 00:00:00', '2021-06-29 01:19:56'),
(2, 'MSI RTX 3080 TI ', 'La mejor placa de video tanto para gaming como para mineria', 'MSI-GeForce-RTX-3080-Ventus.JPG', 4, '2021-01-06', '0000-00-00 00:00:00', '2021-06-29 01:20:05'),
(3, 'AMD Ryzen 9 3950x', 'Procesador ryzen especial para tareas que requieren de gran capacidad multitask', '730143311809-PROCESADOR-AMD-RYZEN-9-3950X-4-7Ghz-(AM4)1601322421463.JPG', 3, '2021-04-23', '0000-00-00 00:00:00', '2021-06-29 01:20:14'),
(4, 'Motherboard X570 MSI', 'Una placa madre con gran capacidad de overclocking', 'X570-ACE.PNG', 4, '2021-05-12', '0000-00-00 00:00:00', '2021-06-29 01:20:24'),
(5, 'Gabinete MSI FORGE', 'El gabinete mas comodo para tus armados de pc', '1607789677_product_0_20191112115827_5dca2de3dc215.PNG', 1, '2021-04-22', '0000-00-00 00:00:00', '2021-06-29 01:20:35'),
(6, 'Water Cooler CoolerMaster', 'La mejor refrigeracion para que tu procesador alcance las mas altas velocidades sin calentarse', 'masterliquid-ml240l-v2-rgb-1200x630.JPG', 5, '2021-01-09', '0000-00-00 00:00:00', '2021-06-29 01:20:42'),
(7, 'Air Cooler Cooler Master', 'Para aquellos que prefieren no realizar la trabajosa refrigeracion liquida, un cooler que cumple siempre.', '71ZCxMCthFL._AC_SX425_.JPG', 2, '2017-08-12', '0000-00-00 00:00:00', '2021-06-29 01:20:54'),
(8, 'Teclado Razer Huntsman mini', 'Teclado razer con la nueva tecnologia optomecanica de la compañia, la mas rapida del mercado', 'teclado-razer-huntsman-mini-79505.JPG', 3, '2019-04-29', '0000-00-00 00:00:00', '2021-06-29 01:20:51'),
(9, 'Monitor Zowie XL2411', 'Monitor 144hz de zowie para que no se te escape un detalle a la hora de jugar', 'D_NQ_NP_736391-MLA31063256117_062019-O.JPG', 5, '2017-06-12', '0000-00-00 00:00:00', '2021-06-29 01:21:00'),
(10, 'Auriculares Astro A504', 'Gran auricular, especial para juegos de tipo battle royale donde impera el sonido 7.1 sorround', 'D_NQ_NP_733380-MLA40186283949_122019-O.JPG', 6, '2020-01-01', '0000-00-00 00:00:00', '2021-06-29 01:21:47');

-- --------------------------------------------------------

--
-- Table structure for table `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `nombreusuario` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `contrasenia` varchar(255) NOT NULL,
  `fecha_nacimiento` date NOT NULL,
  `telefono` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `usuario`
--

INSERT INTO `usuario` (`id`, `nombreusuario`, `email`, `contrasenia`, `fecha_nacimiento`, `telefono`, `created_at`, `updated_at`) VALUES
(1, 'federico', 'federico@gmail.com', 'fede123', '2011-04-02', '1154627756', '2021-06-28 15:44:58', '2021-06-07 19:21:14'),
(2, 'santos', '', 'pazo123', '2000-04-13', '1155637857', '0000-00-00 00:00:00', '2021-06-07 19:21:14'),
(3, 'pehuen', '', 'pehuen123', '1990-09-13', '1154627767', '0000-00-00 00:00:00', '2021-06-07 19:21:14'),
(4, 'mati', '', 'heber123', '1993-11-05', '1167890245', '0000-00-00 00:00:00', '2021-06-07 19:21:14'),
(5, 'adela', '', 'buye123', '2015-02-12', '1197658464', '0000-00-00 00:00:00', '2021-06-07 19:21:14'),
(6, 'Florian Vinelli', 'fvinelli@udesa.edu.ar', '$2a$10$obgrcTwgnKT/jfovz4GoC.gL25J/tp0pKq6XINPmi4zhhqZ5a6vhW', '0000-00-00', NULL, '2021-06-27 18:11:36', '2021-06-27 18:11:36'),
(8, 'fvinelli@udesa.edu.ar', '', '$2a$10$OdwGUEliZTb8Ah9JIAoFZeuzd3kjWb.Ow/nQt7nyE4kMMZxMoYjMy', '0000-00-00', NULL, '2021-06-28 03:05:13', '2021-06-28 03:05:13'),
(9, 'Florian Vinelli 2', 'florianvinelli00@gmail.com', '$2a$10$Y/wHRBmKqlzOTzLMc4EoaONPfub6DFy0PrBp5w02YLVGzLu42yzVS', '0000-00-00', '541168004377', '2021-06-28 22:32:54', '2021-06-28 22:32:54');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `producto_id` (`producto_id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id_foreign` (`usuario_id`);

--
-- Indexes for table `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `producto`
--
ALTER TABLE `producto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `producto_id_foreign` FOREIGN KEY (`producto_id`) REFERENCES `producto` (`id`),
  ADD CONSTRAINT `user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `usuario` (`id`);

--
-- Constraints for table `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `usuario_id_foreign` FOREIGN KEY (`usuario_id`) REFERENCES `usuario` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
