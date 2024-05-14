<template>
  <slot />
  <div
    style="
      width: 100%;
      height: 80px;
      background-color: white;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    "
  >
    <a
      href=""
      style="color: gray; font-size: small; text-decoration: underline"
    >
      Ver en navegador
    </a>
    <div id="spacer" style="padding-top: 0.05rem; padding-bottom: 0.05rem" />
    <div
      style="
        color: gray;
        font-size: small;
        display: flex;
        flex-direction: column;
        align-items: center;
      "
    >
      <p>
        Precios válidos solo para clientes registrados, IVA y Canon LPI no
        incluido (Salvo que se exprese lo contrario)
      </p>
      <p>
        Los precios no incluyen el canon digital según el real decreto-ley
        12/2017
      </p>
    </div>
  </div>
</template>