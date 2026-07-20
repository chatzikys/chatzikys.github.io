---
title: "Grid-Tie Simulation in MATLAB"
description: "Simulink model of a grid-connected photovoltaic system."
tags: ["MATLAB", "Simulink", "Grid Integration", "Renewables"]
date: "2024-04-05"
status: "In Progress"
---

# Grid-Tie PV System Simulation

As distributed energy resources become more prevalent, understanding their interaction with the primary grid is critical. This project models a complete grid-connected photovoltaic system in MATLAB/Simulink.

## Key Subsystems

### 1. PV Array Model
A parameterized PV array block simulating the non-linear I-V and P-V characteristics of a commercial 10kW array under varying irradiance and temperature.

### 2. Maximum Power Point Tracking (MPPT)
Implemented a Perturb and Observe (P&O) algorithm to maximize array yield.
- Step size optimized to balance tracking speed and steady-state oscillations.

### 3. Inverter & Grid Synchronization
- **Phase Locked Loop (PLL)**: Synchronous Reference Frame PLL (SRF-PLL) used to accurately track grid phase and frequency.
- **Current Control**: d-q reference frame control allows independent control of active and reactive power injected into the grid.

## Current Focus
I am currently working on implementing fault ride-through capabilities to observe the system's response to asymmetrical grid faults and voltage sags, ensuring compliance with modern grid codes.
