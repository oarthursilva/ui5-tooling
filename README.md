# ui5-tooling

UI5 Tooling with node using yarn.

- [Getting Started](#getting-started)
- [Adapt project for `ui5-cli`](#adapt-project-for-ui5-cli)

_First time on UI5 Tooling? Try [UI5 Tooling Getting Started](https://sap.github.io/ui5-tooling/pages/GettingStarted/)._

#

## Getting started

### Starting a new project (opcional)

The easiest way to start a new UI5 project is to use a template generator like generator-easy-ui5.

<div style="text-align: right">
  <i>
    <a href="#">Back to top</a>
  </i>
</div>

#
### Adapt project for `ui5-cli`

(opcional) initialize the project by using `yarn init -y`.


1. Install the @ui5/cli on project (not locally).

```
$ yarn add -D @ui5/cli
```

- In order to access the ui5 library from the created project, create the script on `package.json`.

```
scripts: {
  ...
  "ui5": "ui5"
},
```

To check, run `yarn ui5 --help`.


2. Generate the `ui5.yarml` file. Be aware that:

- Applications should only have a 'webapp' folder.
- Libraries should only have a 'src' and (optional) 'test' folder.

```
$ yarn ui5 init
```


3. Define the framework

```
$ yarn ui5 openui5@latest
```


4. Add libraries into `ui5.yaml`

```
ui5 add sap.ui.core sap.m sap.ui.table themelib_sap_fiori_3 # [...]
```

* You can find a documentation of all libraries, including samples and more, in the Demo Kit:
  * [**OpenUI5** Demo Kit](https://openui5.hana.ondemand.com/api)
  * [**SAPUI5** Demo Kit](https://sapui5.hana.ondemand.com/api)


5. Start the server and work on project

```
$ yarn ui5 serve
```

<div style="text-align: right">
  <i>
    <a href="#">Back to top</a>
  </i>
</div>
