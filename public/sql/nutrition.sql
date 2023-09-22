-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Εξυπηρετητής: 127.0.0.1
-- Χρόνος δημιουργίας: 22 Σεπ 2023 στις 08:28:16
-- Έκδοση διακομιστή: 10.4.28-MariaDB
-- Έκδοση PHP: 8.1.17

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Βάση δεδομένων: `nutrition`
--

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `activationlink`
--

CREATE TABLE `activationlink` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `randomLink` varchar(255) NOT NULL,
  `expireLinkDate` datetime NOT NULL,
  `dateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `confirmnewemail`
--

CREATE TABLE `confirmnewemail` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `dateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `createdfood`
--

CREATE TABLE `createdfood` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `isFavourite` tinyint(1) NOT NULL,
  `dateCreatedFood` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `cronjob`
--

CREATE TABLE `cronjob` (
  `id` int(11) NOT NULL,
  `taskName` varchar(50) NOT NULL,
  `queued_at` datetime NOT NULL,
  `completed_at` datetime NOT NULL,
  `is_processed` char(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailyconsumptiongoals`
--

CREATE TABLE `dailyconsumptiongoals` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `water` float NOT NULL,
  `goalDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `dailyconsumptiongoals`
--

INSERT INTO `dailyconsumptiongoals` (`id`, `idUser`, `calories`, `protein`, `carb`, `fat`, `water`, `goalDate`) VALUES
(11, 178, 1643, 74, 209, 60, 2400, '2022-05-18 12:44:18'),
(13, 180, 2750, 123, 307, 92, 2400, '2022-06-14 14:37:42'),
(15, 182, 2750, 123, 307, 92, 2400, '2022-06-14 14:41:11'),
(18, 185, 1925, 481, 963, 481, 2400, '2022-06-14 19:28:46'),
(19, 186, 1479, 67, 189, 54, 2400, '2022-06-15 14:34:23'),
(20, 174, 3000, 542, 178, 235, 5423, '2022-06-25 22:15:35'),
(24, 190, 2583, 116, 329, 95, 2400, '2022-08-27 21:17:44'),
(25, 191, 3013, 136, 384, 110, 2400, '2022-09-01 16:00:54'),
(26, 127, 2750, 123, 307, 92, 2400, '2022-09-01 11:10:38'),
(27, 152, 2750, 123, 307, 92, 2400, '2022-08-12 11:13:07'),
(30, 155, 2750, 123, 307, 92, 2400, '2022-09-05 11:15:00'),
(31, 192, 1754, 79, 224, 64, 2400, '2022-09-17 20:36:10'),
(32, 193, 3502, 158, 447, 128, 2400, '2022-09-18 01:54:56');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailyeatings`
--

CREATE TABLE `dailyeatings` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `idNameOfDailyMeals` int(11) NOT NULL,
  `isFavourite` tinyint(1) NOT NULL,
  `portion` float NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `fiber` float NOT NULL,
  `saturated` float NOT NULL,
  `unsaturated` float NOT NULL,
  `sugar` float NOT NULL,
  `bitamins` float NOT NULL,
  `dailyEatingsDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailysummaries`
--

CREATE TABLE `dailysummaries` (
  `id` int(11) NOT NULL,
  `idDailyConsumptionGoals` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `fiber` float NOT NULL,
  `saturated` float NOT NULL,
  `unsaturated` float NOT NULL,
  `sugar` float NOT NULL,
  `bitamins` float NOT NULL,
  `water` float NOT NULL,
  `note` text NOT NULL,
  `dailySummariesDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `fatpercentage`
--

CREATE TABLE `fatpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `fatPercentage` int(11) NOT NULL,
  `fatDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `isFavourite` tinyint(1) NOT NULL,
  `favouriteDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `foodcategory`
--

CREATE TABLE `foodcategory` (
  `id` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `foodcategory`
--

INSERT INTO `foodcategory` (`id`, `category`) VALUES
(1, 'Όσπρια'),
(2, 'Κρεατικά'),
(3, 'Ζυμαρικά'),
(4, 'Λαχανικά'),
(6, 'Φρούτα'),
(10, 'Ποτό'),
(11, 'Ψάρι'),
(13, 'Vegan'),
(15, 'Γαλακτοκομικά'),
(16, 'Μαγειρευτά'),
(18, 'Pizza');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `foodnames`
--

CREATE TABLE `foodnames` (
  `id` int(11) NOT NULL,
  `foodName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `foodnames`
--

INSERT INTO `foodnames` (`id`, `foodName`) VALUES
(51, 'Ρεβύθια'),
(56, 'Τυρόπιτα'),
(88, 'Lola'),
(98, 'Crocs'),
(104, 'Φαλάφελ'),
(110, 'fhds'),
(111, 'Φέτα Τσουρέκι με Πάστα Αμυγδάλου'),
(112, 'Ποτήρι Γάλα Light 15'),
(114, 'Κόκκινο κρέας'),
(115, 'Apple'),
(116, 'Banana'),
(117, 'Green Apple'),
(118, 'Cherry'),
(119, 'Τangerines'),
(120, 'Orange'),
(121, 'Cranberries'),
(122, 'Grapes'),
(123, 'Plums'),
(124, 'Pomegranate'),
(125, 'Strawberries'),
(126, 'Pork'),
(127, 'Beef Steak'),
(128, 'Beef Burger'),
(129, 'Veggie Burger'),
(130, 'Minced Meat'),
(131, 'Κοτόπουλο ψητό'),
(132, 'Chicken Wings'),
(133, 'Chicken Leg'),
(134, 'Pork Tenderloin Lean Meat Only Roasted'),
(135, 'Pork Tenderloin Lean Meat and Fat Roasted'),
(136, 'Pork Ribs Roasted'),
(137, 'Pork Loin Ribs Lean Meat Only Raw'),
(138, 'Green Peas'),
(139, ' Yoghurt'),
(140, 'Dairy Free Coconut Yoghurt Mango'),
(141, 'Cow\'s Milk Greek Style Natural Yoghurt'),
(142, 'Greek Fat Free Yoghurt'),
(143, 'Natural Yoghurt'),
(144, 'Milk Whole 3.25% Milkfat'),
(145, '2% Milk'),
(146, 'Milk Low Fat 1% Milkfat'),
(147, 'Almond Milk'),
(148, 'Cheddar Cheese'),
(149, 'Cheese Grated'),
(150, 'Parmesan Cheese Grated'),
(151, 'Blue Cheese'),
(152, 'Edam Cheese'),
(153, 'Gruyere Cheese'),
(154, 'Spaghetti Aglio E Olio'),
(155, 'Spicy Meatball Arrabiata Spaghetti'),
(156, 'Spaghetti Bolognese'),
(157, 'Carbonara Pasta W Bacon'),
(158, 'Tagliatelle Con Funghi Porcini'),
(159, 'Linguine Alla Vongole'),
(160, 'Ravioli Spinaci E Ricotta'),
(161, 'Bonta D\'italia Gluten Free Ravioli Con Ricotta E Spinaci'),
(162, 'Ravioli Funghi Porcini'),
(163, 'Gnocchi Al Gorgonzola'),
(164, 'My Nonna\'s Pizza Margerita'),
(165, 'Cilento Pizza Napoletana'),
(166, 'Pizza Alle Verdure Grigliate'),
(167, 'Padana Romana Goat s Cheese and Spinach Pizza'),
(168, 'Pizza Al Salame (25 cm)'),
(169, 'Pizzas Pepperoni Regular Dough'),
(170, 'Bistro Chicken and Pancetta Carbonara Pizza'),
(171, 'Pizza Bianca Bread'),
(172, 'Capricciosa Pizza'),
(173, 'Pagliacci Favorites Parma Primo (28 cm)'),
(174, 'Classic Crust Special Deluxe Pizza');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `idFoodName` int(11) NOT NULL,
  `idFoodCategory` int(11) NOT NULL,
  `idUnitName` int(11) NOT NULL,
  `belongCategory` tinyint(1) NOT NULL,
  `portion` float NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `fiber` float NOT NULL,
  `saturated` float NOT NULL,
  `unsaturated` float NOT NULL,
  `sugar` float NOT NULL,
  `bitamins` float NOT NULL,
  `imgPath` varchar(64) NOT NULL,
  `imgName` varchar(255) NOT NULL,
  `imgHash` varchar(255) NOT NULL,
  `foodDateCreated` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `foods`
--

INSERT INTO `foods` (`id`, `idFoodName`, `idFoodCategory`, `idUnitName`, `belongCategory`, `portion`, `calories`, `protein`, `carb`, `fat`, `fiber`, `saturated`, `unsaturated`, `sugar`, `bitamins`, `imgPath`, `imgName`, `imgHash`, `foodDateCreated`) VALUES
(45, 51, 15, 1, 2, 671, 89, 578, 98, 78, 0, 43, 89, 57, 89, './img_public/', 'weighing-machine.png', 'f9307474ce8c3dadc6e81dbcd6ca3393c5543aa8b17c7ea671241599e30c2a93', '2022-07-02'),
(50, 56, 2, 1, 2, 82, 32, 78, 65, 89, 10, 0, 0, 0, 0, './img_public/', 'fork.png', 'ade3641bfd9704d35a53d94eadae4d91efbfbb739d6b2270a14ab23a12eeacc7', '2022-07-02'),
(82, 88, 2, 1, 2, 56, 342, 47, 65, 67, 234, 0, 0, 0, 0, './img_public/', 'en.png', 'dde9ee2c250bc9cb4d010f1b13b592362a22531603e277353c41717535a676de', '2022-07-14'),
(92, 98, 2, 1, 2, 86, 45, 645, 45, 62, 45, 65, 425, 345, 56, './img_public/', 'water-full.png', '9fcdf0164f203b703e8acac4c08114e9e51e27756c3ff4ed7869e3bebca484c5', '2022-08-25'),
(98, 104, 13, 1, 2, 10, 100, 10, 20, 30, 0, 0, 0, 0, 0, './img_public/', 'falafel.jpeg', '33d50418e94f799889de1d9ce068924f0ef8dfd2824637c6a39616825f768500', '2022-08-31'),
(102, 111, 15, 4, 2, 1, 215, 3, 30, 6, 0, 0, 0, 0, 0, './img_public/', 'tsoureki.jpeg', '21ac82c98f3e5c65da25908fb3fc8c251ac5f688db13eb043c2e894c28f1885d', '2022-09-18'),
(103, 112, 15, 2, 2, 250, 115, 8.25, 11.75, 3.75, 0, 0, 0, 0, 0, './img_public/', 'potiri_gala.jpeg', '9aeaa7ec32cfc01aff36a93a4f3b4135252c286760e07b3c2ecfecaa9917a576', '2022-09-18'),
(105, 114, 15, 1, 2, 245, 240, 54, 62, 74, 87, 41, 65, 56, 32, './img_public/', '', '', '2022-10-02'),
(106, 115, 6, 1, 1, 125, 72, 0, 21, 0.3, 4, 0, 0.1, 16, 0.007, './img_public/', '', '', '2022-10-04'),
(107, 116, 6, 1, 1, 126, 112, 1, 29, 0.4, 3, 0.1, 0.1, 15, 0.011, './img_public/', '', '', '2022-10-04'),
(108, 117, 6, 1, 1, 154, 80, 0, 21, 0.3, 4, 0, 0.1, 16, 0.007, './img_public/', '', '', '2022-10-04'),
(109, 118, 6, 1, 1, 140, 88, 1, 22, 0.3, 3, 0, 0.2, 18, 0.01, './img_public/', '', '', '2022-10-04'),
(110, 119, 6, 1, 1, 10.9, 5.777, 88, 1.454, 33.5, 196, 4.5, 14, 1.153, 0.002911, './img_public/', '', '', '2022-10-04'),
(111, 120, 6, 1, 1, 131, 62, 1, 15, 0.2, 3, 0, 0, 12, 0.07, './img_public/', '', '', '2022-10-05'),
(112, 121, 6, 1, 1, 100, 53, 1, 14, 0.1, 4, 0, 0.1, 5, 0.016, './img_public/', '', '', '2022-10-05'),
(113, 122, 6, 1, 1, 126, 87, 1, 23, 0.2, 1, 0.1, 0.1, 20, 0.04, './img_public/', '', '', '2022-10-05'),
(114, 123, 6, 1, 1, 151, 69, 1, 17, 0.4, 2, 0, 0.3, 15, 0.014, './img_public/', '', '', '2022-10-05'),
(115, 124, 6, 1, 1, 100, 83, 2, 19, 1.2, 4, 0.1, 0.2, 14, 0.01, './img_public/', '', '', '2022-10-05'),
(116, 125, 6, 1, 1, 147, 47, 1, 11, 0.4, 4, 0, 0.3, 7, 0.086, './img_public/', '', '', '2022-10-05'),
(117, 126, 2, 1, 1, 85, 206, 23, 0, 11.8, 0, 4.5, 6.3, 0, 0.01, './img_public/', '', '', '2022-10-05'),
(118, 127, 2, 1, 1, 306, 744, 83, 0, 43.5, 0, 17.2, 19.9, 0, 0, './img_public/', '', '', '2022-10-05'),
(119, 128, 2, 1, 1, 261, 622, 30, 42, 36, 0, 17, 0, 6, 0, './img_public/', '', '', '2022-10-05'),
(120, 129, 13, 1, 1, 295, 440, 22, 52, 19, 12, 2.5, 0, 8, 0.06, './img_public/', '', '', '2022-10-05'),
(121, 130, 2, 1, 1, 100, 183, 19, 0, 12, 0, 5.6, 5.4, 0, 0, './img_public/', '', '', '2022-10-05'),
(122, 131, 2, 1, 1, 100, 154, 31, 0, 3.2, 0, 1, 2.1, 0, 0, './img_public/', '', '', '2022-10-05'),
(123, 132, 2, 1, 1, 100, 254, 24, 0, 16.9, 0, 5.1, 11.3, 0, 0, './img_public/', '', '', '2022-10-05'),
(124, 133, 2, 1, 1, 100, 184, 24, 0, 9, 0, 2.4, 5.5, 0, 0, './img_public/', '', '', '2022-10-05'),
(125, 134, 2, 1, 1, 100, 116, 22, 0, 3.2, 0, 1.1, 1.7, 0, 0, './img_public/', '', '', '2022-10-05'),
(126, 135, 2, 1, 1, 100, 121, 22, 0, 3.7, 0, 1.3, 1.9, 0, 0, './img_public/', '', '', '2022-10-05'),
(127, 136, 2, 1, 1, 283, 606, 82, 0, 28.7, 0, 10, 15.1, 0, 0.01, './img_public/', '', '', '2022-10-05'),
(128, 137, 2, 1, 1, 100, 140, 21, 0, 5.6, 0, 2, 3.1, 0, 0, './img_public/', '', '', '2022-10-05'),
(129, 138, 1, 1, 1, 145, 117, 8, 21, 0.6, 8, 0.1, 0.4, 8, 0.058, './img_public/', '', '', '2022-10-05'),
(130, 139, 15, 1, 1, 150, 124, 7, 10, 6.3, 0, 4, 0, 10, 0, './img_public/', '', '', '2022-10-05'),
(131, 140, 15, 1, 1, 125, 167, 1, 14, 10, 0, 9.3, 0, 7, 0, './img_public/', '', '', '2022-10-05'),
(132, 141, 15, 1, 1, 100, 124, 4, 6, 9.5, 0, 6.3, 0, 5, 0, './img_public/', '', '', '2022-10-05'),
(133, 142, 15, 1, 1, 181, 109, 18, 8, 0, 0, 0, 0, 7, 0, './img_public/', '', '', '2022-10-05'),
(134, 143, 15, 1, 1, 100, 66, 5, 4, 3.5, 0, 2.3, 0, 4, 0, './img_public/', '', '', '2022-10-05'),
(135, 144, 15, 1, 1, 244, 149, 8, 12, 7.9, 0, 4.6, 2.5, 12, 0, './img_public/', '', '', '2022-10-05'),
(136, 145, 15, 1, 1, 244, 122, 8, 12, 4.8, 0, 3.3, 1.6, 12, 0, './img_public/', '', '', '2022-10-05'),
(137, 146, 15, 1, 1, 244, 102, 8, 12, 2.4, 0, 1.5, 0.8, 12, 0, './img_public/', '', '', '2022-10-05'),
(138, 147, 15, 1, 1, 245, 30, 1, 1, 2.5, 1, 0, 2, 0, 0, './img_public/', '', '', '2022-10-05'),
(139, 148, 15, 1, 1, 100, 403, 23, 3, 33.3, 0, 18.9, 10.3, 0, 0, './img_public/', '', '', '2022-10-05'),
(140, 149, 15, 1, 1, 100, 420, 28, 14, 27.8, 0, 16.3, 8.5, 0, 0, './img_public/', '', '', '2022-10-05'),
(141, 150, 15, 1, 1, 100, 420, 28, 14, 27.8, 0, 16.3, 8.5, 0, 0, './img_public/', '', '', '2022-10-05'),
(142, 151, 15, 1, 1, 100, 353, 21, 2, 28.7, 0, 18.7, 8.6, 1, 0, './img_public/', '', '', '2022-10-05'),
(143, 152, 15, 1, 1, 50, 179, 12, 1, 14.3, 0, 9.3, 4.4, 0, 0, './img_public/', '', '', '2022-10-05'),
(144, 153, 15, 1, 1, 50, 207, 15, 0, 16.2, 0, 9.5, 5.9, 0, 0, './img_public/', '', '', '2022-10-05'),
(145, 154, 3, 7, 1, 1, 429, 8, 59, 18, 0, 0, 0, 0, 0, './img_public/', '', '', '2022-10-05'),
(146, 155, 3, 1, 1, 380, 333, 19, 47, 5.7, 7, 1.9, 4.2, 7, 0, './img_public/', '', '', '2022-10-05'),
(147, 156, 3, 1, 1, 489, 510, 31, 39, 23, 5, 8, 0, 9, 0, './img_public/', '', '', '2022-10-05'),
(148, 157, 3, 8, 1, 1, 290, 8, 43, 10, 2, 6.5, 0, 3, 0, './img_public/', '', '', '2022-10-05'),
(149, 158, 3, 1, 1, 450, 795, 22, 88, 37, 11, 14, 0, 7, 0, './img_public/', '', '', '2022-10-05'),
(150, 159, 3, 7, 1, 1, 515, 21, 66, 17, 4, 2, 0, 1, 0, './img_public/', '', '', '2022-10-05'),
(151, 160, 3, 1, 1, 109, 280, 12, 38, 9, 4, 4, 0, 2, 0, './img_public/', '', '', '2022-10-05'),
(152, 161, 3, 1, 1, 125, 309, 9, 42, 10, 6, 4.1, 0, 2, 0, './img_public/', '', '', '2022-10-05'),
(153, 162, 3, 1, 1, 125, 330, 10, 43, 12.5, 0, 4.1, 0, 7, 0, './img_public/', '', '', '2022-10-05'),
(154, 163, 3, 1, 1, 140, 250, 6, 36, 8, 3, 5, 0, 8, 0, './img_public/', '', '', '2022-10-05'),
(155, 164, 18, 1, 1, 100, 213, 8, 31, 6.6, 2, 2.2, 0, 4, 0, './img_public/', '', '', '2022-10-05'),
(156, 165, 18, 1, 1, 424, 1091, 55, 148, 30.3, 9, 10.6, 0, 12, 0, './img_public/', '', '', '2022-10-05'),
(157, 166, 18, 1, 1, 355, 643, 27, 86, 23, 8, 10, 0, 15, 0, './img_public/', '', '', '2022-10-05'),
(158, 167, 18, 7, 1, 1, 956, 41, 139, 28, 11, 12.2, 0, 24, 0, './img_public/', '', '', '2022-10-05'),
(159, 168, 15, 7, 1, 1, 1422, 47, 108, 88, 0, 20, 0, 7, 0, './img_public/', '', '', '2022-10-05'),
(160, 169, 18, 7, 1, 1, 970, 44, 98, 43, 5, 22, 0, 5, 0.09, './img_public/', '', '', '2022-10-05'),
(161, 170, 18, 7, 1, 1, 1318, 64, 171, 44, 11, 22, 0, 8, 0, './img_public/', '', '', '2022-10-05'),
(162, 171, 18, 1, 1, 250, 800, 10, 100, 35, 0, 5, 0, 0, 0, './img_public/', '', '', '2022-10-05'),
(163, 172, 18, 1, 1, 118, 249, 11, 31, 8.2, 4, 2.7, 0, 3, 0, './img_public/', '', '', '2022-10-05'),
(164, 173, 18, 7, 1, 1, 190, 0, 19, 0, 0, 5, 0, 0, 0, './img_public/', '', '', '2022-10-05'),
(165, 174, 18, 1, 1, 625, 1550, 55, 160, 70, 10, 30, 0, 40, 0, './img_public/', '', '', '2022-10-05');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `language`
--

CREATE TABLE `language` (
  `id` int(11) NOT NULL,
  `language` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `language`
--

INSERT INTO `language` (`id`, `language`) VALUES
(1, 'en'),
(2, 'gr');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `nameofdailymeals`
--

CREATE TABLE `nameofdailymeals` (
  `id` int(11) NOT NULL,
  `idLang` int(11) NOT NULL,
  `meals` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `nameofdailymeals`
--

INSERT INTO `nameofdailymeals` (`id`, `idLang`, `meals`) VALUES
(1, 1, 'Breakfast'),
(2, 1, 'Lunch'),
(3, 1, 'Meals'),
(4, 1, 'Dinner'),
(5, 2, 'Πρωινό'),
(6, 2, 'Μεσημεριανό'),
(7, 2, 'Γεύματα'),
(8, 2, 'Βραδινό');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `translationfoodcategory`
--

CREATE TABLE `translationfoodcategory` (
  `id` int(11) NOT NULL,
  `idLang` int(11) NOT NULL,
  `idFoodCategory` int(11) NOT NULL,
  `translationFoodCategory` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `translationfoodcategory`
--

INSERT INTO `translationfoodcategory` (`id`, `idLang`, `idFoodCategory`, `translationFoodCategory`) VALUES
(1, 1, 1, 'Legumes'),
(2, 1, 3, 'Pasta'),
(3, 1, 2, 'Meat'),
(4, 1, 4, 'Vegetables'),
(5, 2, 1, 'Όσπρια'),
(6, 2, 2, 'Κρεατικά'),
(7, 2, 3, 'Ζυμαρικά'),
(8, 2, 4, 'Λαχανικά'),
(11, 1, 6, 'Fruits'),
(12, 2, 6, 'Φρούτα'),
(17, 1, 10, 'Drinks'),
(18, 2, 10, 'Ποτά'),
(19, 1, 11, 'Fish'),
(20, 2, 11, 'Ψάρι'),
(23, 1, 13, 'Vegan'),
(24, 2, 13, 'Vegan'),
(27, 1, 15, 'Dairy Products'),
(28, 2, 15, 'Γαλακτοκομικά'),
(29, 1, 16, 'Μαγειρευτά'),
(30, 2, 16, 'Μαγειρευτά'),
(33, 1, 18, 'Pizza'),
(34, 2, 18, 'Pizza');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `translationfoodname`
--

CREATE TABLE `translationfoodname` (
  `id` int(11) NOT NULL,
  `idLang` int(11) NOT NULL,
  `idFoodName` int(11) NOT NULL,
  `translationFoodName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `translationfoodname`
--

INSERT INTO `translationfoodname` (`id`, `idLang`, `idFoodName`, `translationFoodName`) VALUES
(85, 1, 51, 'Ρεβύθια'),
(86, 2, 51, 'Ρεβύθια'),
(100, 1, 56, 'Τυρόπιτα'),
(101, 2, 56, 'Τυρόπιτα'),
(196, 1, 88, 'Lola'),
(197, 2, 88, 'Lola'),
(221, 1, 98, 'Crocs'),
(222, 2, 98, 'Crocs'),
(233, 1, 104, 'Φαλάφελ'),
(234, 2, 104, 'Φαλάφελ'),
(245, 1, 110, 'fhds'),
(246, 2, 110, 'fhds'),
(247, 1, 111, ' Slice of Tsoureki with Almond Paste'),
(248, 2, 111, 'Φέτα Τσουρέκι με Πάστα Αμυγδάλου'),
(249, 1, 112, 'Glass of light milk 1.5%'),
(250, 2, 112, 'Ποτήρι Γάλα Light 1.5%'),
(253, 1, 114, 'Κόκκινο κρέας'),
(254, 2, 114, 'Κόκκινο κρέας'),
(255, 1, 115, 'Apple'),
(256, 2, 115, 'Μήλο'),
(257, 1, 116, 'Banana'),
(258, 2, 116, 'Μπανάνα'),
(259, 1, 117, 'Green Apple'),
(260, 2, 117, 'Πράσινο μήλο'),
(261, 1, 118, 'Cherry'),
(262, 2, 118, 'Κεράσι'),
(263, 1, 119, 'Τangerines'),
(264, 2, 119, 'Μανταρίνια'),
(265, 1, 120, 'Orange'),
(266, 2, 120, 'Πορτοκάλι'),
(267, 1, 121, 'Cranberries'),
(268, 2, 121, 'Cranberries'),
(269, 1, 122, 'Grapes'),
(270, 2, 122, 'Σταφύλια'),
(271, 1, 123, 'Plums'),
(272, 2, 123, 'Δαμάσκηνα'),
(273, 1, 124, 'Pomegranate'),
(274, 2, 124, 'Ρόδι'),
(275, 1, 125, 'Strawberries'),
(276, 2, 125, 'Φράουλες'),
(277, 1, 126, 'Pork'),
(278, 2, 126, ' Χοιρινό'),
(279, 1, 127, 'Beef Steak'),
(280, 2, 127, 'Μοσχαρίσια Μπριζόλα'),
(281, 1, 128, 'Beef Burger'),
(282, 2, 128, 'Μπιφτέκι Μοσχαρίσιο'),
(283, 1, 129, 'Veggie Burger'),
(284, 2, 129, 'Μπέργκερ Χορτοφάγων'),
(285, 1, 130, 'Minced Meat'),
(286, 2, 130, 'Κιμάς'),
(287, 1, 131, 'Chicken Grilled'),
(288, 2, 131, 'Κοτόπουλο ψητό'),
(289, 1, 132, 'Chicken Wings'),
(290, 2, 132, 'Φτερούγες Κοτόπουλου'),
(291, 1, 133, 'Chicken Leg'),
(292, 2, 133, 'Μπούτι Κοτόπουλου'),
(293, 1, 134, 'Pork Tenderloin Lean Meat Only Roasted'),
(294, 2, 134, ' Χοιρινό Φιλέτο Άπαχο Κρέας μόνο Ψητό'),
(295, 1, 135, 'Pork Tenderloin Lean Meat and Fat Roasted'),
(296, 2, 135, 'Χοιρινό Φιλέτο Άπαχο Κρέας και Λίπος Ψητό'),
(297, 1, 136, 'Pork Ribs Roasted'),
(298, 2, 136, 'Παϊδάκια Χοιρινά Ψημένα'),
(299, 1, 137, 'Pork Loin Ribs Lean Meat Only Raw'),
(300, 2, 137, 'Παϊδάκια από Χοιρινό Φιλέτο Άπαχο Κρέας μόνο ωμό'),
(301, 1, 138, 'Green Peas'),
(302, 2, 138, 'Αρακάς'),
(303, 1, 139, 'Yoghurt'),
(304, 2, 139, 'Γιαούρτι'),
(305, 1, 140, 'Dairy Free Coconut Yoghurt Mango'),
(306, 2, 140, 'Μάνγκο με Γιαούρτι Καρύδας χωρίς Γαλακτοκομικά'),
(307, 1, 141, 'Cow s Milk Greek Style Natural Yoghurt'),
(308, 2, 141, 'Αγελαδινό Ελληνικό Φυσικό Γιαούρτι'),
(309, 1, 142, 'Greek Fat Free Yoghurt'),
(310, 2, 142, 'Ελληνικό γιαούρτι χωρίς λιπαρά'),
(311, 1, 143, 'Natural Yoghurt'),
(312, 2, 143, 'Φυσικό Γιαούρτι'),
(313, 1, 144, 'Milk Whole 3.25% Milkfat'),
(314, 2, 144, 'Γάλα πλήρες 3,25%'),
(315, 1, 145, 'Milk 2% '),
(316, 2, 145, 'Γάλα 2% '),
(317, 1, 146, 'Milk Low Fat 1% Milkfat'),
(318, 2, 146, 'Γάλα Χαμηλών Λιπαρών 1%'),
(319, 1, 147, 'Almond Milk'),
(320, 2, 147, 'Γάλα Αμυγδάλου'),
(321, 1, 148, 'Cheddar Cheese'),
(322, 2, 148, 'Τυρί Τσένταρ'),
(323, 1, 149, 'Cheese Grated'),
(324, 2, 149, 'Τυρί Τριμμένο'),
(325, 1, 150, 'Parmesan Cheese Grated'),
(326, 2, 150, 'Παρμεζάνα Τριμμένη'),
(327, 1, 151, 'Blue Cheese'),
(328, 2, 151, 'Blue Cheese'),
(329, 1, 152, 'Edam Cheese'),
(330, 2, 152, 'Τυρί Edam'),
(331, 1, 153, 'Gruyere Cheese'),
(332, 2, 153, 'Τυρί Γραβιέρα'),
(333, 1, 154, 'Spaghetti Aglio E Olio'),
(334, 2, 154, 'Spaghetti Aglio E Olio'),
(335, 1, 155, 'Spicy Meatball Arrabiata Spaghetti'),
(336, 2, 155, 'Spicy Meatball Arrabiata Spaghetti'),
(337, 1, 156, 'Spaghetti Bolognese'),
(338, 2, 156, 'Spaghetti Bolognese'),
(339, 1, 157, 'Carbonara Pasta W Bacon'),
(340, 2, 157, 'Carbonara Pasta W Bacon'),
(341, 1, 158, 'Tagliatelle Con Funghi Porcini'),
(342, 2, 158, 'Tagliatelle Con Funghi Porcini'),
(343, 1, 159, 'Linguine Alla Vongole'),
(344, 2, 159, 'Linguine Alla Vongole'),
(345, 1, 160, 'Ravioli Spinaci E Ricotta'),
(346, 2, 160, 'Ravioli Spinaci E Ricotta'),
(347, 1, 161, 'Bonta D\'italia Gluten Free Ravioli Con Ricotta E Spinaci'),
(348, 2, 161, 'Bonta D\'italia Gluten Free Ravioli Con Ricotta E Spinaci'),
(349, 1, 162, 'Ravioli Funghi Porcini'),
(350, 2, 162, 'Ravioli Funghi Porcini'),
(351, 1, 163, 'Gnocchi Al Gorgonzola'),
(352, 2, 163, 'Gnocchi Al Gorgonzola'),
(353, 1, 164, 'My Nonna\'s Pizza Margerita'),
(354, 2, 164, 'My Nonna\'s Pizza Margerita'),
(355, 1, 165, 'Cilento Pizza Napoletana'),
(356, 2, 165, 'Cilento Pizza Napoletana'),
(357, 1, 166, 'Pizza Alle Verdure Grigliate'),
(358, 2, 166, 'Pizza Alle Verdure Grigliate'),
(359, 1, 167, 'Padana Romana Goat\'s Cheese and Spinach Pizza'),
(360, 2, 167, 'Padana Romana Goat\'s Cheese and Spinach Pizza'),
(361, 1, 168, 'Pizza Al Salame (25 cm)'),
(362, 2, 168, 'Pizza Al Salame (25 cm)'),
(363, 1, 169, 'Pizzas Pepperoni Regular Dough'),
(364, 2, 169, 'Pizzas Pepperoni Regular Dough'),
(365, 1, 170, 'Bistro Chicken and Pancetta Carbonara Pizza'),
(366, 2, 170, 'Bistro Chicken and Pancetta Carbonara Pizza'),
(367, 1, 171, 'Pizza Bianca Bread'),
(368, 2, 171, 'Pizza Bianca Bread'),
(369, 1, 172, 'Capricciosa Pizza'),
(370, 2, 172, 'Capricciosa Pizza'),
(371, 1, 173, 'Pagliacci Favorites Parma Primo (28 cm)'),
(372, 2, 173, 'Pagliacci Favorites Parma Primo (28 cm)'),
(373, 1, 174, 'Classic Crust Special Deluxe Pizza'),
(374, 2, 174, 'Classic Crust Special Deluxe Pizza');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `translationunitname`
--

CREATE TABLE `translationunitname` (
  `id` int(11) NOT NULL,
  `idLang` int(11) NOT NULL,
  `idUnitName` int(11) NOT NULL,
  `translationUnitName` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `translationunitname`
--

INSERT INTO `translationunitname` (`id`, `idLang`, `idUnitName`, `translationUnitName`) VALUES
(1, 1, 1, 'g'),
(2, 1, 2, 'ml'),
(3, 2, 1, 'g'),
(4, 2, 2, 'ml'),
(13, 1, 4, 'Piece'),
(14, 2, 4, 'Τεμάχιο'),
(19, 1, 7, 'Serving'),
(20, 2, 7, 'Σερβίρισμα'),
(21, 1, 8, 'Cup'),
(22, 2, 8, 'Φλιτζάνι');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `unitname`
--

CREATE TABLE `unitname` (
  `id` int(11) NOT NULL,
  `unit` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `unitname`
--

INSERT INTO `unitname` (`id`, `unit`) VALUES
(1, 'g'),
(2, 'ml'),
(4, 'Τεμάχιο'),
(7, 'Serving'),
(8, 'Cup');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `idLang` int(11) NOT NULL,
  `category` tinyint(1) NOT NULL,
  `username` varchar(64) NOT NULL,
  `email` varchar(64) NOT NULL,
  `pass` varchar(64) NOT NULL,
  `sex` tinyint(1) NOT NULL,
  `age` int(11) NOT NULL,
  `weights` float NOT NULL,
  `height` int(11) NOT NULL,
  `isIncreaseWeight` tinyint(1) NOT NULL,
  `requestedWeight` float NOT NULL,
  `exercise` int(1) NOT NULL,
  `kilos` float NOT NULL,
  `dateCreated` datetime NOT NULL,
  `isConfirmAccount` tinyint(1) NOT NULL,
  `token` varchar(255) NOT NULL,
  `binToken` varchar(255) NOT NULL,
  `apiToken` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Άδειασμα δεδομένων του πίνακα `users`
--

INSERT INTO `users` (`id`, `idLang`, `category`, `username`, `email`, `pass`, `sex`, `age`, `weights`, `height`, `isIncreaseWeight`, `requestedWeight`, `exercise`, `kilos`, `dateCreated`, `isConfirmAccount`, `token`, `binToken`, `apiToken`) VALUES
(127, 2, 2, 'farook', 'farook@gmail.com', '5b3e8a442e270b647961513b9da4611dea24e3424d8d6f155e126da29b5c00a1', 2, 67, 75, 180, 3, 80, 1, 0, '2022-02-18 14:15:10', 1, '9961a6d655843828bacf94ee8db249035abecc35165ffa54ed42a5eb957c4351', '6e8ae0dc719e0e91db682a85fdb8cb6cbabc173da7ae1654c19363331e182a11', '7246ba1cd0ec3d5a5e513887aa2f7d96d00819f3ee9d0901e54daecf881ceb63'),
(152, 2, 1, 'Paul', 'paul@gmail.com', '72733477db88b8da20bb940f0caa4bd3373676805520a67c64743c89c749bf0e', 1, 45, 54, 567, 1, 5, 1, 0, '2022-02-21 00:19:24', 1, 'eb3b0cb20963b2dae7f2f86ef49e7637f3b1ebd6dfffd7b653042d3f5251c647', 'bdf652d2fb6ed2654011c5a9df129581d5168e14eeafc7c3f8c6d54f54d4c9b8', ''),
(155, 1, 1, 'BigDodo', 'bigdodo-kolosos-terastios@dodoclub.com', 'b68dd6af7be8a600436fc5024ccaea1b6095d0143758069e5cdfddfd5a5aa6ee', 2, 48, 85, 178, 3, 90, 1, 0, '2022-03-02 14:29:20', 1, '9915f7c642fee082607b9b62cf21815aa1cc40a0c1f055b9288e0dd51c30d3fa', 'c3bd8175f570e76d50356a49a153ef669f4579790c7d46812e8c932f1bb32c8e', ''),
(174, 2, 1, 'Pane', 'Pane@yahoo.gr', '4d74ce0113304a180139df1d9275eedc7dadced59eaca5106145f38cbc7b2a76', 2, 45, 4458, 444, 2, 4458, 1, 0, '2022-03-09 11:42:28', 1, '67efb0881dff04a313bfd886ae26308eaedb5589f7012f25c68402164f4fdf32', '7ab65f98abbbdd454924324eb11d18d51477e64d61b1ab9b7da0421633832768', ''),
(178, 2, 1, 'Giru', 'giru@gmail.com', '036c457c4f29c5a0f7746a76ceb910cb95c7014cf4204c1c2611542cf1e4769b', 2, 85, 45, 186, 3, 58, 1, 0.5, '2022-05-18 12:44:18', 1, 'b80bab15290e4c7066c5a6ddfd7aa5ef04b5ff446ee5269e6324be9c488e1741', '2578d4fda257886355591e7d23ab611ce8aa7c79baffe9674b9ae68e5be8459b', ''),
(180, 2, 1, 'Poco', 'poco@f3.com', 'f73615561cd86d69029a7dc29a3e6889bea39a549575dd90b516ee73dec38530', 1, 21, 57, 164, 3, 60, 1, 0, '2022-06-14 14:37:42', 1, '83bff4dd2a42931bbdac6f2b57b80c505f7a2cf63fea505cede7ce776f1be63b', 'bf9d70d15e2b2fefde925d64719105a1ed4dcd008b1ee2ef8f9adb242961053a', ''),
(182, 2, 1, 'KiriosEide', 'kirios35@eide.com', 'fd8e95844a35cd83c79797dba9249ca73f34a1951dcc8d2c9dbc6d8d208b0ba6', 2, 44, 88, 178, 1, 84, 1, 0, '2022-06-14 14:41:11', 1, 'b8b15b26343378afa29f9327fd96dad495190d03b6d45cae08056151a81765c4', '5094837b8ac3f2ce5eae7b49cebb5ae3c048cce0097010ffac9b7bd5a16cf997', ''),
(185, 2, 1, 'William', 'william@wil.gre', 'f41adf021a0ece58a7d2d6eb3ef0401522c63b03599185bf3ca68f62be8ed2b7', 2, 23, 23, 32, 1, 22, 1, 1.5, '2022-06-14 19:28:46', 1, '962c430a0cbbcf38ddb710f69fdda008b592a77d8b486c8b3547424e324aeadd', 'cf954e6209c151cf7f3856b57240d9ca9972c231a64628f3abe177d397260dad', ''),
(186, 2, 1, 'mdasyg', 'nutrition@email.vlsi.gr', '0def80137762189d425a8bf4f0679e3b6ca06b714350d6971adb0a7325133fb2', 2, 46, 78, 170, 1, 75, 1, 0.5, '2022-06-15 14:34:23', 1, '8de1118bcebd00436e3b77a110e894301a48a26bd2889c61568cb768b59177ae', '9a2ce77355d4a53423cc74716c2ad6d604a659160001e3ecf7cb3abadc3d58a9', '958c215a64a447a568f50434a863854354373e3aba2278741c598b52500744f6'),
(190, 1, 1, 'Lena', 'lena@lena.com', '44cff81e531ea5dcc1d96b4a45a92d2e075bdd695d261ed1334e6bdb99203151', 1, 21, 58, 163, 3, 60, 3, 0.5, '2022-08-27 21:17:44', 1, 'c23e2aa4f0b099d9b990dfd65c339ebd994d11158564adf994c792049ab75468', '7a8333fe8a2d7da13b708f2fcf3433229dcda94a728ce7f81186bdf4e6265ac3', ''),
(191, 2, 1, 'Testbody', 'testbody@gmail.gr', 'acdc08123bd6fcc5a5950b3e916c0865a46ccdc0ce1199e72f4e8ce9d59e9df9', 2, 23, 77, 187, 3, 80, 2, 0.5, '2022-10-08 18:12:40', 1, '2801f824aff82b8f814eed1ca0915355b7ac42fe8819321deda37e79c34d48ee', 'b6b2fe8f7428f7a61dd50f9720f6dffb7d7e29fd03b8ca6a9b272f72cb1c7067', ''),
(192, 2, 1, 'Test', 'test@gmail.com', '5d9b959081e1af0e7df2038ca7c85b7de24654edb437daa3ded04326f984c43e', 2, 30, 85, 175, 1, 80, 1, 0.5, '2022-09-17 20:36:10', 1, '50869070141bb528afe491cd19a6174b5b3496fec773721c24077bbe6e3fa4d3', '710ee4633f53b76cf1aef471baf0e7461b069332d0c00b78a89831e1f6c95cdf', ''),
(193, 2, 1, 'Test6', 'test6@gmail.com', '21fad388a74e8f761eabb3bd62bd7ab1f5d755f25821bff6b355dca4851e9241', 2, 32, 88, 189, 3, 90, 3, 0.5, '2022-09-18 01:54:56', 1, '17271ce4abb78118f2e8f30a9d2c65da8c74d5e80dbba594027ab018b628076d', '36260e0feae55d67aec3d7705fc32764c8810c6abcc4f9e6a834a3dfbde040c9', 'b9d73f0abb12d8fd75a86e0aa5562068707809c53225b6ffda5521b98626b3c6');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `waterpercentage`
--

CREATE TABLE `waterpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `waterPercentage` int(11) NOT NULL,
  `waterDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weight`
--

CREATE TABLE `weight` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weight` float NOT NULL,
  `weightDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weightbone`
--

CREATE TABLE `weightbone` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weightBone` float NOT NULL,
  `weightBoneDate` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Ευρετήρια για άχρηστους πίνακες
--

--
-- Ευρετήρια για πίνακα `activationlink`
--
ALTER TABLE `activationlink`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `confirmnewemail`
--
ALTER TABLE `confirmnewemail`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idFood` (`idFood`);

--
-- Ευρετήρια για πίνακα `cronjob`
--
ALTER TABLE `cronjob`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idNameOfDailyMeals` (`idNameOfDailyMeals`);

--
-- Ευρετήρια για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDailyConsumptionGoals` (`idDailyConsumptionGoals`);

--
-- Ευρετήρια για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `favourites`
--
ALTER TABLE `favourites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `foodcategory`
--
ALTER TABLE `foodcategory`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `foodnames`
--
ALTER TABLE `foodnames`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`),
  ADD KEY `foods_ibfk_1` (`idFoodName`),
  ADD KEY `foods_ibfk_2` (`idFoodCategory`),
  ADD KEY `foods_ibfk_3` (`idUnitName`);

--
-- Ευρετήρια για πίνακα `language`
--
ALTER TABLE `language`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idLang` (`idLang`);

--
-- Ευρετήρια για πίνακα `translationfoodcategory`
--
ALTER TABLE `translationfoodcategory`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFoodCategory` (`idFoodCategory`),
  ADD KEY `idLang` (`idLang`);

--
-- Ευρετήρια για πίνακα `translationfoodname`
--
ALTER TABLE `translationfoodname`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idFoodName` (`idFoodName`),
  ADD KEY `idLang` (`idLang`);

--
-- Ευρετήρια για πίνακα `translationunitname`
--
ALTER TABLE `translationunitname`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `idLang_2` (`idLang`,`translationUnitName`),
  ADD KEY `idLang` (`idLang`),
  ADD KEY `idUnitName` (`idUnitName`);

--
-- Ευρετήρια για πίνακα `unitname`
--
ALTER TABLE `unitname`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idLang` (`idLang`);

--
-- Ευρετήρια για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `weight`
--
ALTER TABLE `weight`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- AUTO_INCREMENT για άχρηστους πίνακες
--

--
-- AUTO_INCREMENT για πίνακα `activationlink`
--
ALTER TABLE `activationlink`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=75;

--
-- AUTO_INCREMENT για πίνακα `confirmnewemail`
--
ALTER TABLE `confirmnewemail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT για πίνακα `cronjob`
--
ALTER TABLE `cronjob`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=297;

--
-- AUTO_INCREMENT για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=1166;

--
-- AUTO_INCREMENT για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT για πίνακα `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=392;

--
-- AUTO_INCREMENT για πίνακα `foodcategory`
--
ALTER TABLE `foodcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT για πίνακα `foodnames`
--
ALTER TABLE `foodnames`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=186;

--
-- AUTO_INCREMENT για πίνακα `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=177;

--
-- AUTO_INCREMENT για πίνακα `language`
--
ALTER TABLE `language`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT για πίνακα `translationfoodcategory`
--
ALTER TABLE `translationfoodcategory`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- AUTO_INCREMENT για πίνακα `translationfoodname`
--
ALTER TABLE `translationfoodname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=397;

--
-- AUTO_INCREMENT για πίνακα `translationunitname`
--
ALTER TABLE `translationunitname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT για πίνακα `unitname`
--
ALTER TABLE `unitname`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT για πίνακα `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=194;

--
-- AUTO_INCREMENT για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT για πίνακα `weight`
--
ALTER TABLE `weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=83;

--
-- AUTO_INCREMENT για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `activationlink`
--
ALTER TABLE `activationlink`
  ADD CONSTRAINT `activationlink_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `confirmnewemail`
--
ALTER TABLE `confirmnewemail`
  ADD CONSTRAINT `confirmnewemail_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  ADD CONSTRAINT `createdfood_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `createdfood_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  ADD CONSTRAINT `dailyconsumptiongoals_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  ADD CONSTRAINT `dailyeatings_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailyeatings_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailyeatings_ibfk_3` FOREIGN KEY (`idNameOfDailyMeals`) REFERENCES `nameofdailymeals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  ADD CONSTRAINT `dailysummaries_ibfk_2` FOREIGN KEY (`idDailyConsumptionGoals`) REFERENCES `dailyconsumptiongoals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  ADD CONSTRAINT `fatpercentage_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `favourites`
--
ALTER TABLE `favourites`
  ADD CONSTRAINT `favourites_ibfk_1` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favourites_ibfk_2` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `foods`
--
ALTER TABLE `foods`
  ADD CONSTRAINT `foods_ibfk_1` FOREIGN KEY (`idFoodName`) REFERENCES `foodnames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foods_ibfk_2` FOREIGN KEY (`idFoodCategory`) REFERENCES `foodcategory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `foods_ibfk_3` FOREIGN KEY (`idUnitName`) REFERENCES `unitname` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  ADD CONSTRAINT `nameofdailymeals_ibfk_1` FOREIGN KEY (`idLang`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `translationfoodcategory`
--
ALTER TABLE `translationfoodcategory`
  ADD CONSTRAINT `translationfoodcategory_ibfk_1` FOREIGN KEY (`idFoodCategory`) REFERENCES `foodcategory` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `translationfoodcategory_ibfk_2` FOREIGN KEY (`idLang`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `translationfoodname`
--
ALTER TABLE `translationfoodname`
  ADD CONSTRAINT `translationfoodname_ibfk_1` FOREIGN KEY (`idFoodName`) REFERENCES `foodnames` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `translationfoodname_ibfk_2` FOREIGN KEY (`idLang`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `translationunitname`
--
ALTER TABLE `translationunitname`
  ADD CONSTRAINT `translationunitname_ibfk_1` FOREIGN KEY (`idLang`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `translationunitname_ibfk_2` FOREIGN KEY (`idUnitName`) REFERENCES `unitname` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`idLang`) REFERENCES `language` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  ADD CONSTRAINT `waterpercentage_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `weight`
--
ALTER TABLE `weight`
  ADD CONSTRAINT `weight_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  ADD CONSTRAINT `weightbone_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
