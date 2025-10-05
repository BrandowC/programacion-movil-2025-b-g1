# Sprint 1 (Semana 1) — 01/09 al 07/09
**Objetivo:** Autenticación de usuario  
- **HU-01:** Como usuario, quiero iniciar sesión, para acceder a mi panel de control.  

**Criterios de aceptación (Gherkin):**  
- **Escenario 1:** Inicio de sesión exitoso  
  - Dado que me encuentro en la pantalla de inicio de sesión  
  - Cuando ingreso un usuario y una contraseña válidos  
  - Entonces debo acceder correctamente a la pantalla principal de la aplicación.  

- **Escenario 2:** Inicio de sesión fallido  
  - Dado que me encuentro en la pantalla de inicio de sesión  
  - Cuando ingreso un usuario o contraseña incorrectos  
  - Entonces debo recibir un mensaje de error indicando que las credenciales no son válidas.  

---

# Sprint 2 (Semana 2) — 08/09 al 14/09
**Objetivo:** Visualización del estado del vehículo  
- **HU-02:** Como usuario, quiero ver la placa, alias y estado de mi vehículo, para saber si está estacionado.  

**Criterios de aceptación (Gherkin):**  
- **Escenario:** Consulta de estado del vehículo  
  - Dado que he iniciado sesión correctamente  
  - Cuando accedo a la pantalla principal  
  - Entonces debo visualizar la placa registrada, el alias del vehículo y el estado actual (Estacionado / No estacionado).  

---

# Sprint 3 (Semana 3) — 15/09 al 21/09
**Objetivo:** Información de deuda y tiempo  
- **HU-03:** Como usuario, quiero ver cronómetro, tarifa y monto acumulado, para conocer mi deuda mientras estoy estacionado.  

**Criterios de aceptación (Gherkin):**  
- **Escenario:** Visualización de deuda en tiempo real  
  - Dado que mi vehículo se encuentra en estado "Estacionado"  
  - Cuando accedo a la pantalla principal  
  - Entonces debo visualizar un cronómetro en ejecución, la tarifa vigente y el monto de la deuda acumulada actualizado en tiempo real.  

---

# Sprint 4 (Semana 4) — 22/09 al 28/09
**Objetivo:** Manejo del estado "No estacionado"  
- **HU-04:** Como usuario, quiero ver un estado claro cuando no estoy estacionado, para confirmar que no tengo deuda pendiente.  

**Criterios de aceptación (Gherkin):**  
- **Escenario:** Visualización de estado sin deuda  
  - Dado que mi vehículo se encuentra en estado "No estacionado"  
  - Cuando accedo a la pantalla principal  
  - Entonces debo visualizar un mensaje destacado indicando "No estás estacionado"  
  - Y no debe mostrarse ni cronómetro ni monto de deuda.  

---

# Sprint 5 (Semana 5) — 29/09 al 05/10
**Objetivo:** Simulación de actualizaciones en tiempo real  
- **HU-05:** Como usuario, quiero que la información se actualice periódicamente, para tener datos en tiempo real.  

**Criterios de aceptación (Gherkin):**  
- **Escenario:** Actualización automática de la información  
  - Dado que mi vehículo se encuentra en estado "Estacionado"  
  - Cuando transcurra el tiempo de estacionamiento  
  - Entonces el cronómetro y el monto de la deuda deben actualizarse automáticamente cada intervalo de 10 a 15 segundos en el mockup.  

---

# Sprint 6 (Semana 6) — 06/10 al 12/10
**Objetivo:** Cierre, integración y entrega final  
- Consolidar las funcionalidades desarrolladas en los Sprints anteriores.  
- Validar que los mockups sean coherentes con las historias de usuario.  
- Revisar criterios de aceptación y asegurar que todos los escenarios estén contemplados.  
- Documentar backlog, tablero Kanban, HU con criterios Gherkin y evidencias gráficas.  
- Preparar y entregar el documento final con todos los entregables:  
  - Link al tablero Kanban.  
  - Documento con HU + Gherkin.  
  - Mockups (pantallas principales).  
  - Evidencias gráficas (capturas).  

**Resultado esperado:** El producto mínimo viable (MVP) queda integrado, revisado y documentado, listo para su entrega oficial.  

