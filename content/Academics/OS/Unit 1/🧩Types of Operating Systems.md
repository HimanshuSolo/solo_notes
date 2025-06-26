---
enableToc: true
---


**Operating systems** are categorized based on how they handle tasks, users, and devices.

## 🔷 **Batch Operating System**

- Collects jobs in batches → executes without user input.
    
- Jobs stored on magnetic tapes → loaded into memory.
    
- No interactive user interface.
    
- **Limitation**: Debugging is hard.
    

> Example: IBM OS/360

## 🔷 **Time-Sharing OS**

- Enables **multiple users** to use the system at the same time.
    
- CPU gives each job a **time slice**.
    
- Faster and more responsive.
    
- **Multiprogramming + Time sharing**
    

> Example: UNIX, MULTICS

## 🔷 **Distributed OS**

- Multiple computers (nodes) connected via network.
    
- OS appears as a single coherent system.
    
- **Resources shared** (files, printers, processors).
    
- Improves **performance and reliability**.
    

> Examples: LOCUS, Amoeba, Plan 9

## 🔷 **Real-Time OS (RTOS)**

- Processes data as it comes in, with **strict timing constraints**.
    
- Used in **critical systems**: medical devices, aircraft, etc.
    

Types:

- **Hard Real-Time**: Fails if a deadline is missed (e.g. airbag systems)
    
- **Soft Real-Time**: Deadlines important but not critical (e.g. video streaming)
    

> Examples: VxWorks, RTLinux, QNX

## 🔷 **Network OS**

- Runs on servers and allows **network communication** between computers.
    
- Provides services like file sharing, printer access.
    
- Requires **knowledge of networking**.
    

> Examples: Novell NetWare, Windows Server

## 🔷 **Mobile OS**

- Lightweight, optimized for power and touch.
    
- Includes battery management, wireless communication.
    

> Examples: Android (Linux kernel), iOS (XNU kernel)