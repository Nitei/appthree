import {Component, OnInit} from '@angular/core';
import * as THREE from './../../../assets/three/three.js';

@Component({
  selector: 'app-scena',
  templateUrl: './scena.component.html',
  styleUrls: ['./scena.component.sass']
})
export class ScenaComponent implements OnInit {
  public cube: any;
  public camera: any;
  public material: any;
  public renderer: any;
  public scene: any;
  public geometry: any;

  constructor() {}

  ngOnInit() {
    this.initScene()
    this.animate();
  }

  initScene(): void {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.renderer = new THREE.WebGLRenderer();
      this.geometry = new THREE.BoxBufferGeometry( 3, 3, 3, 10, 10, 10 );
      this.material = new THREE.MeshBasicMaterial({
        color: 0x00ff00, // green
        wireframe: true
      });
      this.cube = new THREE.Mesh( this.geometry, this.material );
      document.body.appendChild( this.renderer.domElement );
      this.scene.add( this.cube );
      this.camera.position.z = 5;
      this.animate();
  }

  animate(): void {
    requestAnimationFrame( this.animate.bind(this) );
    this.cube.rotation.x += 0.005;
    this.cube.rotation.y += 0.005;
    this.renderer.setSize( window.innerWidth, window.innerHeight );
    this.renderer.render( this.scene, this.camera );
  }

}
