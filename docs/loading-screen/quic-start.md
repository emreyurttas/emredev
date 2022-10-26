---
sidebar_position: 1
---

# Quic Start

Thanks for buying Sentinel Loading Screen Asset

## About Loading Screen Asset

**Loading Screen - Pro** is a loading screen asset that you can easily use with a single line of code.

## How To Use

#### 1-Place all the scenes in the build.

![Build-Settings](./img/Build-Settings.png)

#### 2-Start Menu Scene.
Select the scene you will use from the menu.

#### 3-Integration.
You can load your scene using a single line of code.

>Sentinel.LoadingScreen.LoadScene(sceneName,loadingSceneName,additiveSceneNames);

| Parameters | Description |
| - | - |
| sceneName | Scene name to open. |
| loadingSceneName | Name of ready loading screens. |
| additiveSceneNames | Additive scene name list. |


```cs
// Single scene
Sentinel.LoadingScreen.LoadScene("Scene Name","Loading Scene Name");
// Additive scene
Sentinel.LoadingScreen.LoadScene("Main Scene Name","Loading Scene Name",new string[2]{"Additive Scene 1","Additive Scene 2"});
```