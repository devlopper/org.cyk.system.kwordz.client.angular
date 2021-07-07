import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBytesReaderComponent } from './file-bytes-reader.component';

describe('FileBytesReaderComponent', () => {
  let component: FileBytesReaderComponent;
  let fixture: ComponentFixture<FileBytesReaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileBytesReaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBytesReaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
