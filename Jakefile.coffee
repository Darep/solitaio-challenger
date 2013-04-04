desc 'Deploy to production'
task 'deploy', ->
    console.log '-----> Deploying...' ;

    cmds = [
        //'git ci -m "lol"',
        //'git push',
        'cd ../prod',
        'pwd'
    ]

    jake.exec cmds, { printStdOut: true }, () ->
        console.log 'OK'
        complete


task 'default', ->
    jake.Task['deploy'].invoke
