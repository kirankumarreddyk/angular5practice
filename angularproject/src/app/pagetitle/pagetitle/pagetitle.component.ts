import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";
@Component({
  selector: 'app-pagetitle',
  templateUrl: './pagetitle.component.html',
  styleUrls: ['./pagetitle.component.css']
})
export class PagetitleComponent implements OnInit {

  constructor(private titleService: Title, private metaService: Meta) { }
  RemoveServiceTags() {
    this.metaService.removeTag("name='robots'");
    this.metaService.removeTag("property='og:title'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:description'");
    this.metaService.removeTag("property='og:url'");
    this.metaService.removeTag("property='og:site_name'");
    this.metaService.removeTag("property='article:publisher'");
    this.metaService.removeTag("property='og:image'");
    this.metaService.removeTag("name='twitter:card'");
    this.metaService.removeTag("name='keyword'");
    this.metaService.removeTag("name='description'");
    this.metaService.removeTag("name='twitter:description'");
    this.metaService.removeTag("name='twitter:title'");
    this.metaService.removeTag("name='twitter:site'");
    this.metaService.removeTag("name='twitter:image'");
    this.metaService.removeTag("name='twitter:creator'");
  }
  MetaValuesBind() {
    this.titleService.setTitle('Kiran  - Project');
    this.metaService.addTags([
      { name: 'robots', content: 'index,follow' }
      , { property: 'og:title', content: 'Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony' }
      , {
        property: 'og:description',
        content: 'We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.'
      }
      , { property: 'og:url', content: 'https://www.kaakateeya.com/ourbranches' }
      , { property: 'og:site_name', content: 'Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony' }
      , { property: 'article:publisher', content: 'https://www.facebook.com/Kaakateeya/' }
      , { property: 'og:image', content: 'http://www.kaakateeya.com/src/images/banner1.jpg' }
      , { name: 'keyword', content: 'Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony' }
      , { name: 'description', content: 'We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.' }
      , { name: 'twitter:card', content: 'summary' }
      , { name: 'twitter:description', content: 'We are the best marriage bureau across Matrimony sites in india. We provide best matrimonial services across the Globe. Lakhs of verified matrimonial profiles.' }
      , { name: 'twitter:title', content: 'Marriage Bureau, Matrimony sites, Matrimonial Services, Matrimony' }
      , { name: 'twitter:site', content: '@KaakateeyaMB' }
      , { name: 'twitter:image', content: 'http://www.kaakateeya.com/src/images/banner1.jpg' }
      , { name: 'twitter:creator', content: '@KaakateeyaMB' }

    ]);
  }

  ngOnInit() {
    this.RemoveServiceTags();
    this.MetaValuesBind();
  }

}
