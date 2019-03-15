---
title: "Gunbus"
draft: true
feature_image: "images/gunbus/feature_image.jpg"
description: "Gunbus is a two player coop Action Game where you have to fight your way through the level using different tanks. The game was developed with the Unity3D game engine."
---
<pre style='color:#55cc66;background:#343434;'><span style='color:#b96969; '>/*******************************************************</span>
<span style='color:#b96969; '>*   Platform: PC &amp; Mac with Kinect                     *</span>
<span style='color:#b96969; '>*   Language: C#                                       *</span>
<span style='color:#b96969; '>*   Development Duration: 12 Weeks                     *</span>
<span style='color:#b96969; '>*   Tools: Unity3D, Microsoft Kinect, OpenNI           *</span>
<span style='color:#b96969; '>*   My Responsibility: Gesture Detection, Gameplay, UI *</span>
<span style='color:#b96969; '>*                                                      *</span>
<span style='color:#b96969; '>*   Team Composition: 1 Artist,                        *</span>
<span style='color:#b96969; '>*                     1 Designer,                      *</span>
<span style='color:#b96969; '>*                     1 Producer,                      *</span>
<span style='color:#b96969; '>*                     2 Programmer                     *</span>
<span style='color:#b96969; '>********************************************************/</span>
</pre>
</pre>

Gunbus is a two player Action Game where you have to fight your way through the levels using different tanks. The game can be played as single player or with another player in coop mode. 

My responsibility was the implementation of the enemies AI where I used _A* path-finding_ for the navigation through the level. There are several different types of enemy which have different behaviors and attributes.
I implemented a _Hierarchical Finite State Machine_ with a _Message System_ which allowed us to design different behaviors for each enemy type with ease.

As part of the Master course the goal of this project was to release and present the game a the dare to be digital exhibition.
The challenge was to compensate changing requirements during the development process by the tutors as well as working in a bigger team with a tight schedule and a given deadline.

{{<youtube ddsLX4cJ_Ek>}}


{{< simplegallery dir="/images/gunbus/gallery/" />}}