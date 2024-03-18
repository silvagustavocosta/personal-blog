---
title: The Basics of how to Detect Diseases Using Artificial Intelligence
date: "2024-03-17T22:12:03.284Z"
description: "The basics of how to use artificial intelligence algorithms to detect cardiorespiratory diseases with the support of smartwatches"
---

After a year of working on an artificial intelligence project at my university, I have concluded and presented a method that utilizes machine learning to detect diseases using smartwatches. Today, I will elaborate on the idea, basics, and execution of the project, as well as discuss some changes I would make based on the experience I have gathered.

## The basics:

Smartwatches gather information about the user and store it; this information varies from step count to heartbeat. These data signals can be processed to indicate the presence of diseases, such as COVID-19, in the user. We can process the signals collected, combined with the Isolation Forest algorithm's application, to detect user anomalies. We will also gather information on the quality of the predictions to study the precision of the analysis. Before proceeding, I should explain the concept of the Isolation Forest.

**Isolation Forest** is an unsupervised algorithm for data anomaly detection, that isolates anomalies in the data set concerning observations in the own data presented. The premise of the algorithm is that anomalous data points are easier to separate from the rest of the sample. The algorithm partitions the sample by randomly selecting attributes and splitting values between the values of the attribute recursively, thus isolating the anomaly from the rest of the data set quicker than a normal value of the sample.

This type of recursive partitioning represented by a tree structure is named ***Isolation Tree***, and the number of partitions required to isolate a point is the length of the path within the tree. So, anomalies require a smaller path to be isolated.

The data utilized in this project was sourced from recent studies [7], [5] that explored the intersection of health and artificial intelligence. Groups of adults were accompanied as they used smartwatches to collect heart rate, step count, and sleep quality data. 
The participants were asked to respond to a formulary inquiring about their daily symptoms (if they had any), demographic information, and medical history, and to log the results of COVID-19 tests in sick participants.

We expect that participants who are sick during a period in which they used the smartwatch will present a bigger number of clustered anomalies in this period. Comparing this to healthy participants, they will also have anomalies presented after the application of the algorithm, but they will be scattered randomly through the dataset.

