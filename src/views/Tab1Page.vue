<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Login view</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 1</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-item class="ion-padding">
        <ion-input label="Email"></ion-input>
      </ion-item>

      <ion-item class="ion-padding">
        <ion-input label="Password"></ion-input>
      </ion-item>

      <ion-button class="ion-padding" expand="full">Masuk</ion-button>      

      <!-- <ExploreContainer name="Tab 1 page" /> -->
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonItem, IonButton, IonInput, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';


</script>
