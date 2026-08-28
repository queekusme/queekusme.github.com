---
layout: project
permalink: /projects/grovespansion
pub_date: 2026-08-28 15:10 +0100
title: Grovespansion
abstract: A Hexpansion project which allows you to connect grove ecosystem sensors to the tildagon badge.
photos:
    - images/grovespansion/grovespansion1.png::The Grovespansion PCB populated with a grove connector, eeprom and passive components
    - images/grovespansion/grovespansion2.png::The grovespansion attached to the Tildagon in Port 6. The app running off of the eeprom displays "Hexpansion 6 app" due to the 6th port being used
    - images/grovespansion/grovespansion3.png::The grovespansion attached to the Tildagon in Port 6. The app launcher shows a hexpansion icon with the text "6 Eeprom Test" due to the 6th port being used and the name being 'Eeprom Test'
links:
    - https://wiki.seeedstudio.com/Grove_System/
    - https://tildagon.badge.emfcamp.org/hexpansions/creating-hexpansions/
tags:
    - EMFCamp
    - Hexpansion
    - Tildagon
    - Grove Connector
cite:
    emfcamp: https://www.emfcamp.org/
    grove_ecosystem: https://wiki.seeedstudio.com/Grove_System/
---

My first PCB hexpansion for the Tildagon Badge for EMFCamp<cite data-id="emfcamp" />. The purpose is to allow use of the grove ecosystem<cite data-id="grove_ecosystem" /> with the tildagon badge as well as using the grove connector and cables for other projects which aren't explicitly within the grove ecosystem.

The board features an eeprom which allows for custom apps to be loaded onto and run off of the hexpansion itself. This is shown working with a test app in the images.

Unfortunately I found an error with the footprint I chose for the grove connector which got the pins inverted which means that grove sensors cannot be used by default, however this won't affect my ability to test the functionality and limits of the connector.

<style>
    .tablelines table, .tablelines td, .tablelines th
    {
        border: 1px solid black;
    }
    .tablelines
    {
        margin-bottom: 1rem;
    }
    .tablelines th
    {
        padding-left: 20px;
        padding-right: 20px
    }
</style>

The pin errors are as follows:

| Pin      | Incorrect | Accurate |
| -------- | --------- | -------- |
| 1        | SCL       | GND      |
| 2        | SDA       | VCC      |
| 3        | VCC       | SDA      |
| 4        | GND       | SCL      |
{: .tablelines}

This is something I will fix for v1.1. Also for v1.1 i will be adding support to map either the hexpansion edge connectors OR 2 of the high speed data pins through to pins 3 and 4 via a solder jumper allowing the user to specify which they wish to use. This will allow use of grove sensors which do not use i2c connectivity, expanding the possibilities of what the hexpansion can be used for.