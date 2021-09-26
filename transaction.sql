use b13_group1;

DROP TABLE IF EXISTS `transaction`;


CREATE TABLE transaction (
	tran_id INT AUTO_INCREMENT,
	user_id INT NOT NULL,
	tran_date DATE,
	tran_type VARCHAR(10),
	amt_sgd DECIMAL(10,2) NOT NULL DEFAULT 0,
	amt_usd DECIMAL(10,2) NOT NULL DEFAULT 0,
	amt_eur DECIMAL(10,2) NOT NULL DEFAULT 0,
	amt_gbp DECIMAL(10,2) NOT NULL DEFAULT 0,
	PRIMARY KEY (tran_id)
);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (1, 1, '2021-07-07 08:02:49', 'Deposit', 9072.66, 3763.17, 2265.45, 6038.42);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (2, 2, '2021-05-17 04:59:22', 'Conversion', 5986.41, 5099.7, 3746.45, 9781.65);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (3, 3, '2021-05-05 01:44:16', 'Deposit', 6109.01, 3674.45, 6842.31, 6195.5);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (4, 4, '2021-06-08 21:39:13', 'Conversion', 1243.19, 1047.5, 368.87, 9199.15);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (5, 5, '2021-07-11 10:45:14', 'Withdrawal', 7736.05, 7179.29, 1987.3, 6851.49);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (6, 6, '2021-06-06 16:51:40', 'Deposit', 2100.54, 994.14, 8856.82, 5036.2);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (7, 7, '2021-08-05 10:51:35', 'Withdrawal', 6706.65, 3322.67, 1468.86, 6024.04);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (8, 8, '2021-07-25 12:43:54', 'Conversion', 7326.48, 7097.17, 1795.11, 5138.11);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (9, 9, '2021-08-09 09:13:22', 'Withdrawal', 2650.1, 1879.14, 7043.26, 7564.35);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (10, 10, '2021-09-13 12:09:19', 'Conversion', 6178.55, 7152.15, 9076.22, 3319.9);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (11, 11, '2021-08-11 18:55:13', 'Deposit', 485.4, 4974.73, 3777.68, 3015.39);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (12, 12, '2021-08-31 18:00:18', 'Deposit', 1435.1, 8020.54, 586.02, 3045.75);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (13, 13, '2021-09-14 09:32:34', 'Conversion', 9517.96, 6757.27, 5403.54, 9711.32);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (14, 14, '2021-08-07 13:15:02', 'Deposit', 3691.49, 775.59, 4856.53, 8051.97);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (15, 15, '2021-09-13 18:28:44', 'Withdrawal', 4092.22, 7156.75, 359.29, 9895.16);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (16, 16, '2021-08-18 00:08:05', 'Deposit', 336.02, 8762.37, 6907.37, 9688.17);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (17, 17, '2021-07-17 17:20:10', 'Conversion', 9125.54, 1321.08, 1715.14, 8196.48);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (18, 18, '2021-06-07 15:05:05', 'Withdrawal', 3973.55, 9150.33, 1153.92, 4136.89);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (19, 19, '2021-05-23 00:27:13', 'Conversion', 7653.61, 3754.73, 6262.36, 530.91);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (20, 20, '2021-09-04 03:23:14', 'Deposit', 495.65, 821.98, 1251.59, 573.39);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (21, 21, '2021-09-10 12:32:11', 'Deposit', 6454.75, 8955.57, 1969.3, 368.47);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (22, 22, '2021-09-11 01:25:52', 'Withdrawal', 2175.27, 8790.11, 7758.81, 3661.04);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (23, 23, '2021-06-09 09:53:03', 'Withdrawal', 1811.61, 8170.07, 9687.21, 6542.37);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (24, 24, '2021-06-29 21:03:47', 'Deposit', 9315.81, 3203.88, 6290.01, 2296.91);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (25, 25, '2021-09-01 16:49:51', 'Withdrawal', 6622.17, 7467.74, 6292.71, 2451.93);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (26, 26, '2021-05-04 04:56:59', 'Withdrawal', 8809.56, 9964.55, 6882.79, 232.01);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (27, 27, '2021-06-17 04:56:46', 'Deposit', 2560.62, 2926.6, 4943.0, 5223.63);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (28, 28, '2021-09-10 04:32:10', 'Withdrawal', 5092.38, 1864.77, 9167.55, 9936.0);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (29, 29, '2021-05-21 19:07:09', 'Conversion', 6529.38, 3959.43, 7663.13, 6428.14);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (30, 30, '2021-06-24 02:58:52', 'Withdrawal', 432.19, 7916.44, 1312.93, 3756.42);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (31, 31, '2021-06-05 11:59:25', 'Deposit', 4101.56, 987.07, 216.76, 2948.97);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (32, 32, '2021-05-10 22:23:38', 'Deposit', 7917.95, 9177.96, 8163.71, 6801.63);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (33, 33, '2021-05-02 23:58:16', 'Deposit', 7174.3, 9554.1, 5908.89, 7378.94);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (34, 34, '2021-08-01 02:58:17', 'Deposit', 2179.24, 7153.8, 435.22, 4136.33);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (35, 35, '2021-06-21 02:06:48', 'Withdrawal', 4491.23, 7941.92, 5187.89, 3589.6);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (36, 36, '2021-07-06 09:31:51', 'Deposit', 842.99, 2441.29, 6088.08, 4768.89);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (37, 37, '2021-06-18 22:47:26', 'Deposit', 4198.84, 9881.86, 3708.89, 9999.32);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (38, 38, '2021-05-02 03:03:31', 'Deposit', 6700.36, 8862.4, 8332.47, 6371.11);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (39, 39, '2021-05-21 19:20:11', 'Conversion', 3578.96, 2459.6, 2162.18, 3173.97);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (40, 40, '2021-09-15 03:31:01', 'Deposit', 1331.77, 8827.25, 7328.84, 6115.25);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (41, 41, '2021-05-07 22:03:41', 'Withdrawal', 1554.15, 9729.61, 9742.79, 9101.59);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (42, 42, '2021-07-07 20:09:47', 'Conversion', 2979.2, 5389.45, 3375.08, 7971.55);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (43, 43, '2021-08-28 07:05:20', 'Withdrawal', 693.3, 5955.52, 3459.58, 4594.34);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (44, 44, '2021-06-25 22:30:42', 'Withdrawal', 2069.05, 5047.37, 4147.13, 1777.4);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (45, 45, '2021-07-20 16:37:11', 'Withdrawal', 3805.53, 7998.49, 3324.74, 6879.32);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (46, 46, '2021-06-08 11:53:10', 'Withdrawal', 9704.79, 4506.76, 2565.24, 5776.04);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (47, 47, '2021-07-05 17:45:18', 'Deposit', 8167.82, 878.83, 8754.27, 9739.67);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (48, 48, '2021-05-03 21:34:27', 'Deposit', 4483.86, 3536.57, 5128.48, 5727.86);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (49, 49, '2021-09-13 14:34:38', 'Conversion', 9168.52, 6897.06, 4339.43, 3682.5);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (50, 50, '2021-06-19 17:56:43', 'Deposit', 2231.65, 757.19, 4958.68, 6229.41);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (51, 51, '2021-09-10 14:34:12', 'Deposit', 9203.4, 3341.52, 3647.81, 339.12);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (52, 52, '2021-07-13 15:29:35', 'Withdrawal', 2998.46, 4278.88, 2396.84, 6411.34);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (53, 53, '2021-06-03 17:29:12', 'Conversion', 3383.93, 5182.62, 462.45, 3637.08);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (54, 54, '2021-05-16 05:04:38', 'Withdrawal', 1366.15, 1728.37, 8284.54, 5815.99);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (55, 55, '2021-08-23 04:33:47', 'Conversion', 4341.96, 8561.49, 591.58, 5513.03);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (56, 56, '2021-09-14 16:44:25', 'Withdrawal', 8908.37, 9396.08, 9979.82, 1787.88);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (57, 57, '2021-08-12 12:03:28', 'Withdrawal', 629.62, 6171.45, 6555.86, 8381.32);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (58, 58, '2021-06-07 09:09:45', 'Deposit', 2138.85, 3435.76, 1106.87, 3653.86);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (59, 59, '2021-07-07 19:41:31', 'Withdrawal', 3667.63, 6443.82, 2448.8, 644.8);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (60, 60, '2021-08-15 10:37:26', 'Conversion', 6436.94, 7250.66, 834.35, 5573.88);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (61, 61, '2021-06-05 11:35:02', 'Conversion', 1727.49, 5120.28, 7951.53, 5801.34);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (62, 62, '2021-09-16 03:28:55', 'Conversion', 3664.68, 5571.63, 5426.02, 3344.79);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (63, 63, '2021-08-06 06:13:35', 'Withdrawal', 6987.38, 593.6, 8554.23, 482.39);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (64, 64, '2021-07-11 16:45:26', 'Deposit', 6981.3, 8544.1, 4547.59, 8498.11);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (65, 65, '2021-05-21 06:16:30', 'Conversion', 57.45, 61.3, 1218.41, 5851.9);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (66, 66, '2021-06-30 03:08:39', 'Deposit', 5618.15, 3090.78, 9915.39, 3021.11);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (67, 67, '2021-07-31 03:49:21', 'Withdrawal', 1017.24, 988.87, 9587.36, 5066.73);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (68, 68, '2021-06-18 12:19:47', 'Withdrawal', 8532.56, 3346.42, 4488.22, 9860.28);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (69, 69, '2021-06-23 09:32:08', 'Conversion', 2376.5, 3748.16, 7612.78, 2545.45);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (70, 70, '2021-07-27 02:10:12', 'Conversion', 7908.22, 8670.03, 7677.73, 8568.04);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (71, 71, '2021-09-01 12:32:38', 'Deposit', 3058.24, 3906.39, 251.05, 7739.88);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (72, 72, '2021-07-10 05:51:04', 'Conversion', 214.64, 9725.85, 7941.78, 4900.86);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (73, 73, '2021-06-26 20:36:23', 'Conversion', 7199.47, 5317.31, 6252.75, 1665.24);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (74, 74, '2021-06-04 09:23:50', 'Conversion', 5724.29, 2972.83, 6182.68, 5007.16);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (75, 75, '2021-05-28 03:38:04', 'Deposit', 7766.3, 5344.96, 8560.03, 4997.22);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (76, 76, '2021-08-28 23:59:14', 'Withdrawal', 4944.11, 6669.63, 2135.76, 1264.4);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (77, 77, '2021-06-18 16:08:40', 'Deposit', 9517.06, 2095.48, 8568.04, 9438.01);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (78, 78, '2021-05-11 16:49:06', 'Deposit', 2618.39, 336.03, 9722.76, 9927.15);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (79, 79, '2021-08-16 10:45:41', 'Conversion', 1273.19, 3933.05, 1996.77, 3697.05);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (80, 80, '2021-07-13 15:37:36', 'Deposit', 83.17, 6096.06, 2069.41, 197.45);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (81, 81, '2021-09-08 20:29:35', 'Conversion', 2633.31, 5826.17, 6101.96, 6286.74);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (82, 82, '2021-05-01 16:40:01', 'Withdrawal', 6576.05, 1119.89, 3187.93, 370.53);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (83, 83, '2021-07-08 07:13:14', 'Withdrawal', 1682.69, 2719.62, 4862.71, 36.94);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (84, 84, '2021-05-29 10:24:10', 'Withdrawal', 2741.53, 2916.21, 3125.32, 4225.19);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (85, 85, '2021-05-05 08:25:09', 'Conversion', 377.42, 7119.17, 2404.0, 5646.09);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (86, 86, '2021-06-17 17:33:05', 'Deposit', 2993.99, 2941.19, 4022.61, 4880.09);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (87, 87, '2021-05-31 07:29:04', 'Conversion', 1162.36, 1584.41, 4408.59, 6920.17);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (88, 88, '2021-05-22 17:37:06', 'Withdrawal', 1535.28, 8692.19, 9056.34, 4238.39);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (89, 89, '2021-08-14 09:49:30', 'Withdrawal', 1486.9, 1829.82, 802.81, 2568.1);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (90, 90, '2021-05-15 13:38:03', 'Deposit', 1096.7, 5350.75, 2375.75, 9375.05);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (91, 91, '2021-09-13 03:49:58', 'Withdrawal', 49.39, 2012.16, 9493.0, 9216.85);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (92, 92, '2021-05-10 18:45:43', 'Withdrawal', 920.53, 8666.31, 680.13, 2056.44);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (93, 93, '2021-08-17 09:18:45', 'Conversion', 7366.43, 9127.61, 8521.96, 5843.69);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (94, 94, '2021-06-30 03:28:34', 'Conversion', 7001.04, 6102.8, 5347.63, 8640.9);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (95, 95, '2021-09-17 04:06:39', 'Conversion', 8052.72, 7468.06, 1148.19, 7858.36);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (96, 96, '2021-05-11 12:36:45', 'Withdrawal', 7408.85, 630.8, 2491.17, 5350.73);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (97, 97, '2021-07-25 07:44:44', 'Deposit', 750.46, 5461.37, 1554.68, 5892.96);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (98, 98, '2021-08-06 07:05:48', 'Withdrawal', 3426.2, 1155.97, 3079.02, 6740.67);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (99, 99, '2021-05-28 14:40:27', 'Conversion', 4711.98, 8195.59, 9702.43, 1149.48);
insert into transaction (tran_id, user_id, tran_date, tran_type, amt_sgd, amt_usd, amt_eur, amt_gbp) values (100, 100, '2021-08-28 18:12:13', 'Conversion', 6754.46, 5630.04, 8653.95, 4754.75);



/***
Update user.last_tran_date to be same as transaction.tran_date, for each user_id,
Due to different dates randomly generated
***/
UPDATE user AS u 
JOIN transaction AS t 
ON u.user_id = t.user_id 
SET 
    u.last_tran_date = t.tran_date;
