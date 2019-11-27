import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
// This component MUST and will be partioned out of app component to a different source
// App component will serve for render the route outlet component
export class AppComponent implements OnInit {
  skipped: boolean;

  ngOnInit() {}
}
