## Deployment steps [on google kubernetes engine]
- create project on google cloud console
- build docker image and push to google cloud repository
  ```bash
    $ docker build -t hellokubernetes:1.0.0 .
    $ gcloud auth configure-docker
    $ docker tag hellokubernetes:1.0.0 gcr.io/[PROJECT-ID]/hellokubernetes:1.0.0
    $ docker push gcr.io/[PROJECT-ID]/hellokubernetes:1.0.0
  ```
- create google cluster
  ```bash
    $ gcloud container clusters create [CLUSTER_NAME]
    $ gcloud container clusters get-credentials [CLUSTER_NAME]
  ```
- apply deployment on google kubernetes engine
  ```bash
    $ kubectl apply -f deployment.yaml
    $ kubectl get deployments
  ```
- apply load balancer service
  ```bash
    $ kubectl apply -f service-load-balancer.yaml
    $ kubectl get service
  ```
## now project already deployed can access with external IP
#### Diagram
<img src="diagram1.png">
