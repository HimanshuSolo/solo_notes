---
enableToc: true
---


Structure defines how different parts of the OS are organized and interact.

---

## A. 🧊 **Monolithic Structure**

- All OS services run in kernel mode.
    
- No modular separation.
    
- High performance, but poor **maintainability**.
    

> Example: Traditional UNIX

**Drawback**: One error in any module can crash the whole system.

---

## B. 🧱 **Layered Structure**

- Divides OS into **layers**, each built on top of lower ones.
    
- Top layers use services of the lower ones.
    
- **Modular and maintainable**.
    

> Example: THE OS (Edsger Dijkstra)

**Drawback**: Slower due to multiple interfaces.

---

## C. 🔍 **Microkernel Architecture**

- Only **core functionalities** in kernel (e.g. memory, scheduling, IPC).
    
- Other services run as **user processes**.
    

**Benefits**:

- High reliability (fault isolation)
    
- Easier to modify and extend
    

> Examples: Minix, QNX, L4

**Drawback**: Slower message passing between kernel and services.

---

## D. ⚡ **Hybrid Architecture**

- Combines features of **monolithic + microkernel**.
    
- Core services in kernel mode, rest in user mode.
    
- **Balance of performance and modularity**.
    

> Examples:

- **Windows NT**: Hybrid kernel
    
- **macOS**: Hybrid of Mach (microkernel) + BSD (monolithic)