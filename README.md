# sfdc-git-package-xml

Used for generating package.xml files from existing SalesForce project source (src) folders.
Use it to generate a package.xml for files changed between commits - helps with incremental deployment.

### Currently supports:
* ApexClass
* ApexPage
* ApexComponent
* ApexTrigger
* CustomObject
* CustomLabels
* StaticResource
* EmailTemplate
* Workflow
* AprovalProcess

```
Usage: sgpx [options]

    Options:
        --help                      Show help                                [boolean]
        --version                   Show version number                      [boolean]
        -f, --from                  A commit sha/branch/tag                 [required]
        -t, --to                    A commit sha/branch/tag                 [required]
        -d, --dir                   Directory of git repository             [required]
        --sv, --salesforce-version  SalesForce api version                  [required]
        -w, --write                 Writes to file instead of only printing to console
        -v, --verbose               Enables verbose logging

    Examples:

        sgpx --from v1.2 --to v1.3 --dir /my/absolute/dir/path/to/repo --sv 41.0
```

### TODO:
[ ] Add support for other types
