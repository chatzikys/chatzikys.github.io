---
title: "Power Factor Correction Circuit"
description: "Active boost PFC converter for non-linear load applications."
tags: ["Boost Converter", "Control Systems", "LTspice"]
date: "2024-02-10"
status: "Complete"
---

# Active Power Factor Correction (PFC)

Non-linear loads inherently draw distorted current waveforms, leading to poor power quality and inefficient transmission. This project focuses on designing an Active Boost PFC front-end to ensure the current drawn from the utility matches the voltage waveform in shape and phase.

## Topology

A traditional boost converter was chosen due to its continuous input current characteristic, which is highly desirable for shaping the utility input current. 

## Control Implementation

The control system utilizes average current mode control with an inner current loop and an outer voltage loop.

1. **Outer Voltage Loop**: Regulates the output DC bus to a fixed 390V. The bandwidth is kept low (approx 10-20 Hz) to avoid distorting the input current reference with twice-line-frequency ripple.
2. **Inner Current Loop**: Forces the inductor current to follow a reference template proportional to the rectified input voltage. Bandwidth is high (approx 1/10th of switching frequency).

## Simulation & Validation
Extensive simulation was performed in LTspice to validate the control loop stability. 

- Uncorrected PF: 0.65
- Corrected PF: 0.99
- Current THD reduced from 85% down to 4.2%.

The hardware implementation confirmed the simulation results, maintaining high efficiency over a wide load range.
