---
title: "Was Ist Was - Abenteuer Erde (2009)"
draft: false
date: 2009
feature_image: "images/wasistwas/feature_image.png"
description: "Was ist Was - Abenteuer Erde is an action adventure for the Nintendo DS where the player has to travel around the world and solve puzzles in order to find his missing grandfather."
---
![Example image](/images/wasistwas/GameInfo.png )

*Was ist Was - Abenteuer Erde* is an action adventure for the *Nintendo DS* where the player has to travel around the world and solve puzzles in order to find his missing grandfather. As part of the development process I wrote my Diploma thesis *Implementation of a State Driven AI Subsystem including Pathfinding on an ARM Derivative*.

My responsibility was the game AI as well as the implementation of the Minigames. The challenge was to keep the memory allocations low which was a problem in the implementation of navigation meshes having an hight number of nodes which were necessary in big maps to have a smooth pathfinding. Therefore I had to use some techniques to reduce the nodes described in my Diploma Thesis.

{{< simplegallery dir="/images/wasistwas/gallery/" />}}