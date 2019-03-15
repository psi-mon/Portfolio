---
title: "Magus Arena"
draft: true
feature_image: "images/magus/feature_image.jpg"
description: "Magus Arena is a two person Kinect game on PC and Mac. The two players have to fight each other by summoning spells like fireballs in order to throw them on the other player. The game was developed using the Unity3D game engine and OpenNI for the communication with the Microsoft Kinect hardware."
---

{{< highlight python >}}
/******************************************************************
*   Platform: PC & Mac with Kinect  
*   Language: C#
*   Development Duration: 12 Weeks
*   Tools: Unity3D, Microsoft Kinect, OpenNI
*   My Responsibility: Gesture Detection, Gameplay, UI
*
*   Team Composition: 1 Artist, 
*                     1 Designer, 
*                     1 Producer, 
*                     2 Programmer
*******************************************************************/
{{< /highlight >}}

Magus Arena is a two person _Kinect_ game on PC and Mac. Each player stands on a platform in a lava river facing each other. With certain hand gestures the player can cast spells like a fireball, shield or a replanish mana spell. Since the movement of the player is very limited due the small platform they are standing on it is challenging to dodge incoming fireballs.

My main responsibility was the integration of the _Microsoft Kinect_, gesture recognition as well as the main gameplay. When we started with the development Microsoft just released the Kinect and there was no official SDK or API available. Therefore we had to use the open source software _OpenNI_ which had very limited gesture recognition at that time and was not that easy to use as well. In order to have "magical like" spell gestures I had to implement the recognition of the players hand movement and mapping to certain patterns by myself.

Depending on the characters dimension I created colliders around the model of the player and tracked all collisions with the collider on the player's hand with this collider grid. The result of the collisions time and order was then mapped to some predefined gestures like a zero or cross.
This naive approach worked quite well and delivered the needed precision and robustness we needed for the game to cast spells.

{{< video mp4="/videos/Magus_TrailerHQ.mp4" >}}


{{< simplegallery dir="/images/magus/gallery/" />}}