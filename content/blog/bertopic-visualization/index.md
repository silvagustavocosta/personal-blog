---
title: Interpreting BERTopic neural topic modeling results
date: "2024-03-25T22:12:03.284Z"
description: "Visualizing BERTopic: interpretable topics and understanding their representation, how it works and where it works."
---

In the last few months, I have been studying topic modeling neural networks and their applications. I have been developing a strategy to represent the topics from a database of complaints about companies in Portuguese. One of the tests that I have been conducting is to use the BERTopic approach along with the embeddings from BERTimbau (a language model trained in Portuguese, based on the BERT transformer model).

But what I want to explore here are the initial results and their visualization. For these examples, I have trained the model with a few documents (10,000 to be exact) and will generate some visualizations. This step is extremely important to understand the model, how it works, and where it works. We can look at the generated topics and see what makes sense and what does not in our strategy.

## Visualize Topics

This is the Intertopic Distance Map, which displays the topics generated in a 2D representation. Each point represents a topic, and the distance between points indicates the similarity or dissimilarity between topics.

We can also analyze that the use of the default hyperparameters of the BERTopic approach generates some clusters of topics, and in some cases, a topic contains a great number of other "sub-topics."

But, most importantly, let's discuss how this plot is generated.

<iframe src="/distance_map.html" width="600" height="400"></iframe>
