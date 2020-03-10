
import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLinkActive, Routes } from '@angular/router';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
 selector: 'app-tabrouting',
  templateUrl: './tabrouting.component.html',
  styleUrls: ['./tabrouting.component.css']
})
export class TabroutingComponent implements AfterViewInit, OnInit {
  isViewInitialized = false;
  
  navLinks = [ { path: 'home', label: 'Home' },
    { path: 'about', label: 'About' }];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private changeDetector: ChangeDetectorRef,
  ) {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.isViewInitialized = true;
    this.changeDetector.detectChanges();
  }

  buildNavItems(routes: Routes) {
    return (routes)
      .filter(route => route.data)
      .map(({ path = '', data }) => ({
        path: path,
        label: data.label,
        icon: data.icon
      }));
  }

  isLinkActive(rla: RouterLinkActive): boolean {
    const routerLink = rla.linksWithHrefs.first;
    
    return this.router.isActive(routerLink.urlTree, false);
  }
}