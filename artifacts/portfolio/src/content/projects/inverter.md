---
title: "Single-Phase Inverter Design"
description: "Design and PCB layout of a 500W single-phase full-bridge inverter."
tags: ["Power Electronics", "Altium Designer", "C/C++", "STM32"]
date: "2023-11-15"
status: "Complete"
---

# Single-Phase Inverter Design

This project involved the complete design cycle of a 500W single-phase full-bridge inverter, intended for off-grid solar applications.

## Specifications
- **Input Voltage**: 48V DC
- **Output Voltage**: 120V AC RMS
- **Output Frequency**: 60Hz
- **Rated Power**: 500W Continuous

## System Architecture

The core of the inverter utilizes a full-bridge switching topology comprised of four N-channel MOSFETs. The control signals are generated via Unipolar SPWM (Sinusoidal Pulse Width Modulation) utilizing an STM32 microcontroller. 

### Control Strategy
A closed-loop voltage control system was implemented using a PI controller to maintain output voltage regulation under varying load conditions. 

```c
// Example PI Controller snippet for voltage regulation
float pi_controller(float setpoint, float feedback) {
    float error = setpoint - feedback;
    integral += error * dt;
    return (Kp * error) + (Ki * integral);
}
```

## PCB Design
The layout was critical to minimize parasitic inductance in the high-current paths. 
- Separate logic and power ground planes, tied at a single point (star grounding).
- High current traces were routed on top and bottom layers with thermal vias to maximize current carrying capacity.
- Snubber circuits implemented across each switch to damp high-frequency ringing.

## Results
The prototype achieved a peak efficiency of 92% at 400W load. THD (Total Harmonic Distortion) was measured at 3.5%, well within the IEEE 519 standard limits for general systems.
