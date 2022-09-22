-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Φιλοξενητής: localhost
-- Χρόνος δημιουργίας: 09 Μαρ 2022 στις 13:29:49
-- Έκδοση διακομιστή: 5.7.36-log
-- Έκδοση PHP: 7.4.27

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `activationlink`
--

INSERT INTO `activationlink` (`id`, `idUser`, `randomLink`, `expireLinkDate`, `dateCreated`) VALUES
(45, 165, 'dfeadb59593535258c4b0d793a47e20d2a6c8ad57680316074a21fe4388d2714', '2022-03-02 18:51:48', '2022-03-02 16:51:48'),
(46, 166, '277792a68bd542986ec2eabec4152cf20b6a713b80ebc8b4636bf67e52810100', '2022-03-02 19:06:41', '2022-03-02 17:06:41'),
(50, 170, '5cd5d6a9fc34b6886a2df71fdd2293acd7a0216594e0ab10cb7413944f9c7841', '2022-03-03 03:25:50', '2022-03-03 01:25:50'),
(51, 171, '56710b0c60efb7bd4ec99510911cf571387ac269781567cd27f91e6e5a39f0ed', '2022-03-03 14:28:28', '2022-03-03 12:28:28'),
(52, 174, '2a5ac5e9c157b0285f859062482e432f55070df432e675fb1505a4ddd98adeec', '2022-03-09 13:42:28', '2022-03-09 11:42:28');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `biometrics`
--

CREATE TABLE `biometrics` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `bmi` float NOT NULL,
  `bar` float NOT NULL,
  `runCalories` float NOT NULL,
  `waterBodyAmount` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `createdfood`
--

CREATE TABLE `createdfood` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `dateCreatedFood` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailyeatings`
--

CREATE TABLE `dailyeatings` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `idNameOfDailyMeals` int(11) NOT NULL,
  `portion` float NOT NULL,
  `dailyEatingsDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dailysummaries`
--

CREATE TABLE `dailysummaries` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idDailyConsumptionGoals` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `water` float NOT NULL,
  `note` text NOT NULL,
  `dailySummariesDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `daysofweek`
--

CREATE TABLE `daysofweek` (
  `id` int(11) NOT NULL,
  `days` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `daysofweek`
--

INSERT INTO `daysofweek` (`id`, `days`) VALUES
(1, 'Δευτέρα'),
(2, 'Τρίτη'),
(3, 'Τετάρτη'),
(4, 'Πέμπτη'),
(5, 'Παρασκευή'),
(6, 'Σάββατο'),
(7, 'Κυριακή');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `dietprograms`
--

CREATE TABLE `dietprograms` (
  `id` int(11) NOT NULL,
  `idNumberOfPrograms` int(11) NOT NULL,
  `idNameOfDailyMeals` int(11) NOT NULL,
  `idDaysOfWeek` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `portion` float NOT NULL,
  `foodDietDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `fatpercentage`
--

CREATE TABLE `fatpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `fatPercentage` int(11) NOT NULL,
  `fatDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `favourites`
--

CREATE TABLE `favourites` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idFood` int(11) NOT NULL,
  `favouriteDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `isFoodCategory` tinyint(1) NOT NULL,
  `name` varchar(64) NOT NULL,
  `portion` int(11) NOT NULL,
  `unit` int(11) NOT NULL,
  `calories` float NOT NULL,
  `protein` float NOT NULL,
  `carb` float NOT NULL,
  `fat` float NOT NULL,
  `saturated` float NOT NULL,
  `unsaturated` float NOT NULL,
  `sugar` float NOT NULL,
  `bitamins` float NOT NULL,
  `imgName` varchar(64) NOT NULL,
  `imgHash` varchar(255) NOT NULL,
  `foodDateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `nameofdailymeals`
--

CREATE TABLE `nameofdailymeals` (
  `id` int(11) NOT NULL,
  `meals` varchar(64) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `nameofdailymeals`
--

INSERT INTO `nameofdailymeals` (`id`, `meals`) VALUES
(1, 'Πρωινό'),
(2, 'Μεσημεριανό'),
(3, 'Γεύματα'),
(4, 'Βραδινό');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `nameofuserprograms`
--

CREATE TABLE `nameofuserprograms` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `userProgramDateCreated` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `numberofprograms`
--

CREATE TABLE `numberofprograms` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `idNameOfUserPrograms` int(11) NOT NULL,
  `categoryProgramDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
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
  `dateCreated` datetime NOT NULL,
  `isConfirmAccount` tinyint(1) NOT NULL,
  `token` varchar(255) NOT NULL,
  `binToken` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Άδειασμα δεδομένων του πίνακα `users`
--

INSERT INTO `users` (`id`, `category`, `username`, `email`, `pass`, `sex`, `age`, `weights`, `height`, `isIncreaseWeight`, `requestedWeight`, `dateCreated`, `isConfirmAccount`, `token`, `binToken`) VALUES
(115, 1, 'Mitch', 'dimitrismanoloukos@hotmail.com', 'f6516d9be9f95e30ff915ba60aa4f59119ab301e513587623c2ccc04622ce554', 2, 26, 110, 190, 1, 99, '2022-01-20 01:33:36', 1, '884af8aa96ac7d81fadb486d42e26f364061f3e5f19b185a81b2198b3cd8b9f5', '456791d563ad131aa65f1e9471cbcaf71af0d63e1fd0d06aa7f879b05c07aa04'),
(126, 1, 'test', 'test@gmail.com', '659b3e19cf6f538cda7371ca2c588aa813827d102f1840a1673b1738c93dc5a8', 2, 23, 67, 45, 1, 8, '2022-02-18 14:08:40', 1, '95fabc7d47f62b43a5b1b8c307d8cafb9d76798e4104be26d3ba63ea1e626933', 'bb9dc8b8d0d2d0b364f9a70a6db9687e838fe8580cab918d1b19f4dacd079366'),
(127, 1, 'farook', 'farook@gmail.com', '5b3e8a442e270b647961513b9da4611dea24e3424d8d6f155e126da29b5c00a1', 2, 67, 75, 180, 3, 80, '2022-02-18 14:15:10', 1, '9961a6d655843828bacf94ee8db249035abecc35165ffa54ed42a5eb957c4351', '6e8ae0dc719e0e91db682a85fdb8cb6cbabc173da7ae1654c19363331e182a11'),
(128, 1, 'Evangelos', 'vagos199942@gmail.com', 'c792971b1026434042e6c15906a3ec2f6d35c60ca0097bd00b498c65980d68f3', 2, 33, 80, 175, 1, 75, '2022-02-18 14:19:04', 1, '2f5602e592eb7917b6a241a644ce3d125af05a7944d48709218abc536cc88740', 'a6b50bb204d8a5988c3ba143135b033e3a8fa7446aa2a1a82f32026589eafe8e'),
(130, 1, 'test1', 'test1@gmail.com', '6742643a6a4d07f1e456b9cb45a36d25fffb79bfac4f2a5daa877ddbcaeb0e83', 2, 65, 566, 544, 1, 53, '2022-02-18 14:37:04', 1, 'ba5b4c8f229a0b9b45399087f1fa16faaf76d0e4ac46d765e788695e877a00dd', 'afee339c0e0dec96128fd5d6d61a9ae14bdeac9913292c64ea94920187377b12'),
(152, 1, 'Paul', 'paul@gmail.com', '72733477db88b8da20bb940f0caa4bd3373676805520a67c64743c89c749bf0e', 1, 45, 54, 567, 1, 5, '2022-02-21 00:19:24', 1, 'eb3b0cb20963b2dae7f2f86ef49e7637f3b1ebd6dfffd7b653042d3f5251c647', 'bdf652d2fb6ed2654011c5a9df129581d5168e14eeafc7c3f8c6d54f54d4c9b8'),
(153, 1, 'dimitrakis', 'bat_sis@hotmail.com', '665681a3eb4d5e01dfb87b043efb94b9720bb8268c61b58e305cb1250ac9a1f8', 1, 23, 65, 100, 2, 65, '2022-02-21 18:56:12', 1, '0e41adb152c4328bbf624fa7aada3598db99773a2984d5f2e61adb194bf5750b', '4936193e7ac2347bf8565387ab7ad8d1fd9e070d8445827b669aa5bee2e35ff5'),
(154, 1, 'Vage', 'Vage@hotmail.com', '97b445f8cc5e55e59b8d874db8fd9db7cd3b3e3cded76cdbfb41ee0f8328237f', 2, 111, 12, 222, 1, 11, '2022-02-25 23:26:40', 1, '9378ea59ba9951a2fc4e200ec7f8b34cfe056f42584e378d60a726dd27a136a2', 'bff9027119ae00d67da47c021172204094c20294d123697aa9ea070a8527ac13'),
(155, 1, 'BigDodo', 'bigdodo-kolosos-terastios@dodoclub.com', 'b68dd6af7be8a600436fc5024ccaea1b6095d0143758069e5cdfddfd5a5aa6ee', 2, 48, 85, 178, 3, 90, '2022-03-02 14:29:20', 1, '9915f7c642fee082607b9b62cf21815aa1cc40a0c1f055b9288e0dd51c30d3fa', 'c3bd8175f570e76d50356a49a153ef669f4579790c7d46812e8c932f1bb32c8e'),
(165, 1, 'Prokoparas', 'pakis13@rocketmail.com', '4161e6a1597bcaacdc1196b30b2a610caba1d2c44fd4435d66244948a9191fe5', 2, 24, 110, 181, 1, 90, '2022-03-02 16:51:48', 0, '3a324bd9cf74c9281c7f1417276fdd913d83ed8d339a90be90bad7db3f26ca46', 'd030e1070ca81424c27bf291b45637fb5d78b81a6e5af9db686f464b015dec87'),
(166, 1, 'Helen', 'elenh.per1@gmail.com', '395f6e94e85638eeb4f958bbffb45eee87afeeca2a03a63808f9d3465dd2c9d2', 1, 28, 50, 168, 3, 55, '2022-03-02 17:06:41', 0, '06696d6e80651475810beec0dd91236a176afc9b7d059bc726feb46a909a9b3e', 'df392c90046c47fd864f256e25a5764e9b377f5537fd6c0f11b93f66562aa749'),
(167, 1, 'Ntinos', 'k.perros97@gmail.com', 'e3a58497e4e900a659f954734071bcbe9859f052f623baf20b0c7e95c2520e23', 2, 25, 85, 185, 3, 86, '2022-03-02 17:46:00', 1, 'd538d01501b74fcc13e90fb07fa54de7f4dd5aeed19e49dd53a7b2471e3fda82', '746999b84994a8345023df5cad74a6a94529da75fe4952c08d7406eb18b7c859'),
(168, 1, 'Hara', 'ckyriakou@uoa.gr', '0b15ed297cd2716b7769e05ce75e599d0b0b3b7215b994b7f56cebbb80e6a503', 1, 23, 85, 187, 1, 80, '2022-03-02 17:49:29', 1, 'e52f87fdadaa54f7bdaebfdeeeaa4ef8bc23e5423a53a6420a1abdf0ca1818c7', '70d42e1d06f01772080d7f27dbfa2066e915d608d4061fb0d5fcadf4e779f943'),
(169, 1, 'annad', 'adaskou97@gmail.com', 'd3b5f619f12155c660db08af31ed1bb391d2e275cd2f68391602e8cb34ac3b6d', 1, 24, 61, 174, 2, 61, '2022-03-02 18:40:52', 1, 'c8e488e4d7ee466e557eddb2ea55d95351427689bc615482f4a7d69e653f8360', '0e6ea84e870858d87fa63c5509e9f16c7869b3bfcf0a850861eb44727473fd7a'),
(170, 1, 'Jo', 'ioannapaid97@gmail.com', 'b0e2c7d7216411c1b3cbfb9bdfe9f29052774abf50827614948592216e545f2f', 1, 24, 62, 162, 3, 64, '2022-03-03 01:25:50', 0, '06998a069861f172e1d240acd581c10faae9a86e5cb82ff0a63682658ecd3fc2', '709cf2fdea352e077921802c9c92b17163d1809f564e1d20b3d8bd075d80526b'),
(171, 1, 'Wildwest', 'kostas.pe.97@gmail.com', 'e1cf6a530baec799c0e32cfe529100e78a1e88c250861c457864ef17acdded8c', 2, 26, 80, 186, 3, 82, '2022-03-03 12:28:28', 0, '4a5e4c1fe439567f08fb1ea66b88f7eb6a50bf6edb51d09533447d62dfe86eba', '1494d7354911000c3691db5d7242eed0e62dff6a3f17bd081abe1e06bdd3cc80'),
(172, 1, 'ece01121', 'ece01121@uowm.gr', '5acbe878cde8740074ae5062cd6a42502f712eb8f6c87b3d086e0600ee15c97c', 2, 25, 95, 199, 3, 99, '2022-03-03 12:39:09', 1, '6ceb0caa865b687fce10e35ecdf03d0146ea7a9ecfd1226e18b2d3d91345f1f1', 'd3c62e571506b8c3cdae8fb94af847309743a9b9b98333f665dff2e167f01849'),
(173, 1, 'Harris97', 'harrism1997@hotmail.com', '4a216864a869d3f0934e1fea68dd1407936ece989f7a63cfd73221b1227b8c9c', 2, 24, 90, 181, 2, 90, '2022-03-04 21:33:56', 1, 'a508c99c94bd854ec5080824bfee016dded7174d4f8831d609d099714c7422f5', '2d51984a8deaab65fa1b5f299ca122a0d414621686667958e115e78258f7aba6'),
(174, 1, 'Pan', 'pan@yahooo.gr', '4d74ce0113304a180139df1d9275eedc7dadced59eaca5106145f38cbc7b2a76', 1, 34, 60, 165, 3, 61, '2022-03-09 11:42:28', 1, '67efb0881dff04a313bfd886ae26308eaedb5589f7012f25c68402164f4fdf32', '7ab65f98abbbdd454924324eb11d18d51477e64d61b1ab9b7da0421633832768');

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `waterpercentage`
--

CREATE TABLE `waterpercentage` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `waterPercentage` int(11) NOT NULL,
  `waterDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weight`
--

CREATE TABLE `weight` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weight` float NOT NULL,
  `weightDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Δομή πίνακα για τον πίνακα `weightbone`
--

CREATE TABLE `weightbone` (
  `id` int(11) NOT NULL,
  `idUser` int(11) NOT NULL,
  `weightBone` float NOT NULL,
  `weightBoneDate` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

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
-- Ευρετήρια για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
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
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idDailyConsumptionGoals` (`idDailyConsumptionGoals`);

--
-- Ευρετήρια για πίνακα `daysofweek`
--
ALTER TABLE `daysofweek`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idDaysOfWeek` (`idDaysOfWeek`),
  ADD KEY `idFood` (`idFood`),
  ADD KEY `idNameOfDailyMeals` (`idNameOfDailyMeals`),
  ADD KEY `idNumberOfPrograms` (`idNumberOfPrograms`);

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
-- Ευρετήρια για πίνακα `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  ADD PRIMARY KEY (`id`);

--
-- Ευρετήρια για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`);

--
-- Ευρετήρια για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUser` (`idUser`),
  ADD KEY `idNameOfUserPrograms` (`idNameOfUserPrograms`);

--
-- Ευρετήρια για πίνακα `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`,`username`);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;

--
-- AUTO_INCREMENT για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `confirmnewemail`
--
ALTER TABLE `confirmnewemail`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT για πίνακα `createdfood`
--
ALTER TABLE `createdfood`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailyconsumptiongoals`
--
ALTER TABLE `dailyconsumptiongoals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailyeatings`
--
ALTER TABLE `dailyeatings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `dailysummaries`
--
ALTER TABLE `dailysummaries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `daysofweek`
--
ALTER TABLE `daysofweek`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `fatpercentage`
--
ALTER TABLE `fatpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `favourites`
--
ALTER TABLE `favourites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `nameofdailymeals`
--
ALTER TABLE `nameofdailymeals`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;

--
-- AUTO_INCREMENT για πίνακα `waterpercentage`
--
ALTER TABLE `waterpercentage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `weight`
--
ALTER TABLE `weight`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT για πίνακα `weightbone`
--
ALTER TABLE `weightbone`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Περιορισμοί για άχρηστους πίνακες
--

--
-- Περιορισμοί για πίνακα `activationlink`
--
ALTER TABLE `activationlink`
  ADD CONSTRAINT `activationlink_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `biometrics`
--
ALTER TABLE `biometrics`
  ADD CONSTRAINT `biometrics_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
  ADD CONSTRAINT `dailysummaries_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dailysummaries_ibfk_2` FOREIGN KEY (`idDailyConsumptionGoals`) REFERENCES `dailyconsumptiongoals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `dietprograms`
--
ALTER TABLE `dietprograms`
  ADD CONSTRAINT `dietprograms_ibfk_1` FOREIGN KEY (`idDaysOfWeek`) REFERENCES `daysofweek` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_2` FOREIGN KEY (`idFood`) REFERENCES `foods` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_3` FOREIGN KEY (`idNameOfDailyMeals`) REFERENCES `nameofdailymeals` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `dietprograms_ibfk_4` FOREIGN KEY (`idNumberOfPrograms`) REFERENCES `numberofprograms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
-- Περιορισμοί για πίνακα `nameofuserprograms`
--
ALTER TABLE `nameofuserprograms`
  ADD CONSTRAINT `nameofuserprograms_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Περιορισμοί για πίνακα `numberofprograms`
--
ALTER TABLE `numberofprograms`
  ADD CONSTRAINT `numberofprograms_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `numberofprograms_ibfk_2` FOREIGN KEY (`idNameOfUserPrograms`) REFERENCES `nameofuserprograms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
